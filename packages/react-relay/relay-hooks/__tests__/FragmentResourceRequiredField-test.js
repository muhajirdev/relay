/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+relay
 * @flow
 * @format
 */

'use strict';

const {getFragmentResourceForEnvironment} = require('../FragmentResource');
const {
  __internal: {fetchQuery},
  createOperationDescriptor,
  graphql,
} = require('relay-runtime');
const {createMockEnvironment} = require('relay-test-utils');

const componentDisplayName = 'TestComponent';
const UserFragment = graphql`
  fragment FragmentResourceRequiredFieldTestUserFragment on User {
    id
    name @required(action: THROW)
    alternate_name @required(action: LOG)
  }
`;

let environment;
let query;
let FragmentResource;
let logger;
let requiredFieldLogger;

beforeEach(() => {
  logger = jest.fn();
  requiredFieldLogger = jest.fn();

  environment = createMockEnvironment({
    log: logger,
    requiredFieldLogger,
  });
  FragmentResource = getFragmentResourceForEnvironment(environment);

  query = createOperationDescriptor(
    graphql`
      query FragmentResourceRequiredFieldTestUserQuery($id: ID!) {
        node(id: $id) {
          __typename
          ...FragmentResourceRequiredFieldTestUserFragment
        }
      }
    `,
    {id: '4'},
  );
});

test('Throws if a @required(action: THROW) field is null', () => {
  environment.commitPayload(query, {
    node: {
      __typename: 'User',
      id: '4',
      name: null,
      alternate_name: 'Zuckster',
    },
  });
  expect(() => {
    FragmentResource.read(
      UserFragment,
      {
        __id: '4',
        __fragments: {
          FragmentResourceRequiredFieldTestUserFragment: {},
        },
        __fragmentOwner: query.request,
      },
      componentDisplayName,
    );
  }).toThrowError(
    "Relay: Missing @required value at path 'name' in 'FragmentResourceRequiredFieldTestUserFragment'.",
  );
});

test('Logs if a @required(action: LOG) field is null', () => {
  environment.commitPayload(query, {
    node: {
      __typename: 'User',
      id: '4',
      name: 'Zucc',
      alternate_name: null,
    },
  });
  FragmentResource.read(
    UserFragment,
    {
      __id: '4',
      __fragments: {
        FragmentResourceRequiredFieldTestUserFragment: {},
      },
      __fragmentOwner: query.request,
    },
    componentDisplayName,
  );
  expect(requiredFieldLogger).toHaveBeenCalledWith({
    fieldPath: 'alternate_name',
    kind: 'missing_field.log',
    owner: 'FragmentResourceRequiredFieldTestUserFragment',
  });
});

test('Throws if a @required(action: THROW) field is present and then goes missing', () => {
  const callback = jest.fn();
  environment.commitPayload(query, {
    node: {
      __typename: 'User',
      id: '4',
      name: 'Zucc',
      alternate_name: 'Zuckster',
    },
  });
  const result = FragmentResource.read(
    UserFragment,
    {
      __id: '4',
      __fragments: {
        FragmentResourceRequiredFieldTestUserFragment: {},
      },
      __fragmentOwner: query.request,
    },
    componentDisplayName,
  );
  expect(result.data).toEqual({
    id: '4',
    name: 'Zucc',
    alternate_name: 'Zuckster',
  });

  // $FlowFixMe[method-unbinding] added when improving typing for this parameters
  expect(environment.subscribe).toHaveBeenCalledTimes(0);
  const disposable = FragmentResource.subscribe(result, callback);

  environment.commitPayload(query, {
    node: {
      __typename: 'User',
      id: '4',
      name: null,
      alternate_name: 'Zuckster',
    },
  });

  expect(() =>
    FragmentResource.read(
      UserFragment,
      {
        __id: '4',
        __fragments: {
          FragmentResourceRequiredFieldTestUserFragment: {},
        },
        __fragmentOwner: query.request,
      },
      componentDisplayName,
    ),
  ).toThrowError(
    "Relay: Missing @required value at path 'name' in 'FragmentResourceRequiredFieldTestUserFragment'.",
  );

  expect(requiredFieldLogger).toHaveBeenCalledWith({
    fieldPath: 'name',
    kind: 'missing_field.throw',
    owner: 'FragmentResourceRequiredFieldTestUserFragment',
  });

  disposable.dispose();
});

it('should throw promise if reading missing data and network request for parent query is in flight', async () => {
  fetchQuery(environment, query).subscribe({});
  const fragmentRef = {
    __id: '4',
    __fragments: {
      FragmentResourceRequiredFieldTestUserFragment: {},
    },
    __fragmentOwner: query.request,
  };

  // Try reading a fragment while parent query is in flight
  let thrown = null;
  try {
    FragmentResource.read(UserFragment, fragmentRef, componentDisplayName);
  } catch (p) {
    thrown = p;
  }

  expect(thrown).toBeInstanceOf(Promise);

  environment.mock.resolve(query, {
    data: {
      node: {
        __typename: 'User',
        id: '4',
        name: null,
        alternate_name: 'Zuckster',
      },
    },
  });
  jest.runAllImmediates();
  await thrown;

  // Now that the request is complete, check that we detect the missing field.
  expect(() =>
    FragmentResource.read(UserFragment, fragmentRef, componentDisplayName),
  ).toThrowError(
    "Relay: Missing @required value at path 'name' in 'FragmentResourceRequiredFieldTestUserFragment'.",
  );
});

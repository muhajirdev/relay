/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<7b581f07809d7a30a5470df9e643b587>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type UserRequiredNameResolver$key = any;
import userRequiredNameResolver from "../resolvers/UserRequiredNameResolver.js";
// Type assertion validating that `userRequiredNameResolver` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(userRequiredNameResolver: (
  rootKey: UserRequiredNameResolver$key, 
) => mixed);
export type RelayReaderResolverTestRequiredQuery$variables = {||};
export type RelayReaderResolverTestRequiredQuery$data = {|
  +me: ?{|
    +required_name: ?$Call<<R>((...empty[]) => R) => R, typeof userRequiredNameResolver>,
  |},
|};
export type RelayReaderResolverTestRequiredQuery = {|
  response: RelayReaderResolverTestRequiredQuery$data,
  variables: RelayReaderResolverTestRequiredQuery$variables,
|};
*/

var node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RelayReaderResolverTestRequiredQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "fragment": {
              "args": null,
              "kind": "FragmentSpread",
              "name": "UserRequiredNameResolver"
            },
            "kind": "RelayResolver",
            "name": "required_name",
            "resolverModule": require('./../resolvers/UserRequiredNameResolver.js'),
            "path": "me.required_name"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RelayReaderResolverTestRequiredQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "982bbad09d50fdab375e8c33b363967c",
    "id": null,
    "metadata": {},
    "name": "RelayReaderResolverTestRequiredQuery",
    "operationKind": "query",
    "text": "query RelayReaderResolverTestRequiredQuery {\n  me {\n    ...UserRequiredNameResolver\n    id\n  }\n}\n\nfragment UserRequiredNameResolver on User {\n  name\n}\n"
  }
};

if (__DEV__) {
  (node/*: any*/).hash = "87c7958b00f0a3e6132ce99279b5af8b";
}

module.exports = ((node/*: any*/)/*: Query<
  RelayReaderResolverTestRequiredQuery$variables,
  RelayReaderResolverTestRequiredQuery$data,
>*/);

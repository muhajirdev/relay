/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<c4e7a2c4d19cfba7e75ea7488be56829>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type LivePingPongResolver$key = any;
import queryPingResolver from "../../../relay-runtime/store/__tests__/resolvers/LivePingPongResolver.js";
// Type assertion validating that `queryPingResolver` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(queryPingResolver: (
  rootKey: LivePingPongResolver$key, 
) => mixed);
export type LiveResolversTest4Query$variables = {||};
export type LiveResolversTest4Query$data = {|
  +ping: ?$Call<$Call<<R>((...empty[]) => R) => R, typeof queryPingResolver>["read"]>,
|};
export type LiveResolversTest4Query = {|
  response: LiveResolversTest4Query$data,
  variables: LiveResolversTest4Query$variables,
|};
*/

var node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LiveResolversTest4Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "fragment": {
          "args": null,
          "kind": "FragmentSpread",
          "name": "LivePingPongResolver"
        },
        "kind": "RelayLiveResolver",
        "name": "ping",
        "resolverModule": require('./../../../relay-runtime/store/__tests__/resolvers/LivePingPongResolver.js'),
        "path": "ping"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LiveResolversTest4Query",
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
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ClientExtension",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__id",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ec2a6058213d7126370d6a8d067556c6",
    "id": null,
    "metadata": {},
    "name": "LiveResolversTest4Query",
    "operationKind": "query",
    "text": "query LiveResolversTest4Query {\n  ...LivePingPongResolver\n}\n\nfragment LivePingPongResolver on Query {\n  me {\n    id\n  }\n}\n"
  }
};

if (__DEV__) {
  (node/*: any*/).hash = "f88dfcbb9cbb421799731f61d327f4ac";
}

module.exports = ((node/*: any*/)/*: Query<
  LiveResolversTest4Query$variables,
  LiveResolversTest4Query$data,
>*/);

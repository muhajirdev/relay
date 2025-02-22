/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<d08a52f14ac282c41e482a413e9de774>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type UserProfilePictureWithDefaultValueResolver$key = any;
import userUserProfilePictureUriWithScaleAndDefaultValueResolver from "../resolvers/UserProfilePictureWithDefaultValueResolver.js";
// Type assertion validating that `userUserProfilePictureUriWithScaleAndDefaultValueResolver` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(userUserProfilePictureUriWithScaleAndDefaultValueResolver: (
  rootKey: UserProfilePictureWithDefaultValueResolver$key, 
  args: {|
    scale: ?number,
  |}, 
) => mixed);
export type RelayReaderResolverTest17Query$variables = {||};
export type RelayReaderResolverTest17Query$data = {|
  +me: ?{|
    +user_profile_picture_uri_with_scale_and_default_value: ?$Call<<R>((...empty[]) => R) => R, typeof userUserProfilePictureUriWithScaleAndDefaultValueResolver>,
  |},
|};
export type RelayReaderResolverTest17Query = {|
  response: RelayReaderResolverTest17Query$data,
  variables: RelayReaderResolverTest17Query$variables,
|};
*/

var node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RelayReaderResolverTest17Query",
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
              "name": "UserProfilePictureWithDefaultValueResolver"
            },
            "kind": "RelayResolver",
            "name": "user_profile_picture_uri_with_scale_and_default_value",
            "resolverModule": require('./../resolvers/UserProfilePictureWithDefaultValueResolver.js'),
            "path": "me.user_profile_picture_uri_with_scale_and_default_value"
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
    "name": "RelayReaderResolverTest17Query",
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
            "args": [
              {
                "kind": "Literal",
                "name": "scale",
                "value": 1.5
              }
            ],
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "profile_picture",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "uri",
                "storageKey": null
              }
            ],
            "storageKey": "profile_picture(scale:1.5)"
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
    "cacheID": "2f66e0300c4db0d0d23821fa8854526e",
    "id": null,
    "metadata": {},
    "name": "RelayReaderResolverTest17Query",
    "operationKind": "query",
    "text": "query RelayReaderResolverTest17Query {\n  me {\n    ...UserProfilePictureWithDefaultValueResolver\n    id\n  }\n}\n\nfragment UserProfilePictureWithDefaultValueResolver on User {\n  profile_picture(scale: 1.5) {\n    uri\n  }\n}\n"
  }
};

if (__DEV__) {
  (node/*: any*/).hash = "e3d82e53a530e186384e70fb3ee90c42";
}

module.exports = ((node/*: any*/)/*: Query<
  RelayReaderResolverTest17Query$variables,
  RelayReaderResolverTest17Query$data,
>*/);

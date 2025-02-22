/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 * @emails oncall+relay
 */

// flowlint ambiguous-object-type:error

'use strict';

import type {UserBestFriendShoutedGreetingResolver$key} from './__generated__/UserBestFriendShoutedGreetingResolver.graphql';

const {graphql} = require('relay-runtime');
const {readFragment} = require('relay-runtime/store/ResolverFragments');

/**
 * @RelayResolver
 * @fieldName best_friend_shouted_greeting
 * @rootFragment UserBestFriendShoutedGreetingResolver
 * @onType User
 */
function userBestFriendShoutedGreeting(
  rootKey: UserBestFriendShoutedGreetingResolver$key,
): string {
  const user = readFragment(
    graphql`
      fragment UserBestFriendShoutedGreetingResolver on User {
        friends(first: 1) {
          edges {
            cursor
            node {
              greeting
            }
          }
        }
      }
    `,
    rootKey,
  );
  const greeting = user?.friends?.edges?.[0]?.node?.greeting ?? 'Greetings!';
  return greeting.toUpperCase();
}

module.exports = userBestFriendShoutedGreeting;

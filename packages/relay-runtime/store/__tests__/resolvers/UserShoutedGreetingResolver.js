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

import type {UserShoutedGreetingResolver$key} from './__generated__/UserShoutedGreetingResolver.graphql';

const {graphql} = require('relay-runtime');
const {readFragment} = require('relay-runtime/store/ResolverFragments');

/**
 * @RelayResolver
 * @fieldName shouted_greeting
 * @rootFragment UserShoutedGreetingResolver
 * @onType User
 */
function userShoutedGreeting(rootKey: UserShoutedGreetingResolver$key): string {
  const user = readFragment(
    graphql`
      fragment UserShoutedGreetingResolver on User {
        greeting
      }
    `,
    rootKey,
  );
  const greeting = user.greeting ?? 'Greetings!';
  return greeting.toUpperCase();
}

module.exports = userShoutedGreeting;

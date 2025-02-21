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

import type {UserCustomGreetingResolver$key} from './__generated__/UserCustomGreetingResolver.graphql';

const {graphql} = require('relay-runtime');
const {readFragment} = require('relay-runtime/store/ResolverFragments');

/**
 * @RelayResolver
 * @fieldName custom_greeting(salutation: String!)
 * @rootFragment UserCustomGreetingResolver
 * @onType User
 *
 * Greet the user with a custom salutation provided via arguments.
 */
function userGreeting(
  rootKey: UserCustomGreetingResolver$key,
  args: {|salutation: string|},
): string {
  const user = readFragment(
    graphql`
      fragment UserCustomGreetingResolver on User {
        name
      }
    `,
    rootKey,
  );
  const name = user.name ?? 'Stranger';
  return `${args.salutation}, ${name}!`;
}

module.exports = userGreeting;

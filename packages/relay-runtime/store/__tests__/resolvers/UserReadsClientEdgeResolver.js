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

import type {UserReadsClientEdgeResolver$key} from './__generated__/UserReadsClientEdgeResolver.graphql';

const {graphql} = require('relay-runtime');
const {readFragment} = require('relay-runtime/store/ResolverFragments');

/**
 * @RelayResolver
 * @fieldName reads_client_edge
 * @rootFragment UserReadsClientEdgeResolver
 * @onType User
 *
 * Reads a client edge field and then returns a string
 */
function userClientEdgeResolver(
  rootKey: UserReadsClientEdgeResolver$key,
): string {
  readFragment(
    graphql`
      fragment UserReadsClientEdgeResolver on User {
        client_edge @waterfall {
          name
        }
      }
    `,
    rootKey,
  );
  return 'Hello. I read a client edge.';
}

module.exports = userClientEdgeResolver;

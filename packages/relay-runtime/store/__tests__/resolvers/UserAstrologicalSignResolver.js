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

import type {UserAstrologicalSignResolver$key} from './__generated__/UserAstrologicalSignResolver.graphql';
import type {AstrologicalSignID} from './AstrologicalSignUtils';

const {findSign} = require('./AstrologicalSignUtils');
const {graphql} = require('relay-runtime');
const {readFragment} = require('relay-runtime/store/ResolverFragments');

/**
 * @RelayResolver
 * @fieldName astrological_sign
 * @rootFragment UserAstrologicalSignResolver
 * @onType User
 * @edgeTo AstrologicalSign
 *
 * A Client Edge that points to a client-defined representaiton of the user's
 * star sign.
 */
function astrologicalSign(
  rootKey: UserAstrologicalSignResolver$key,
): AstrologicalSignID {
  const user = readFragment(
    graphql`
      fragment UserAstrologicalSignResolver on User {
        birthdate @required(action: THROW) {
          month @required(action: THROW)
          day @required(action: THROW)
        }
      }
    `,
    rootKey,
  );
  return findSign(user.birthdate.month, user.birthdate.day);
}

module.exports = astrologicalSign;

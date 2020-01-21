const debug = require('debug')('gql:auth:context');

import { auth as firebaseAuth } from 'firebase-admin';
import { spartanHeaders } from '@molonlabe/spartan-auth';
import {
  getUserById,
  getUserByEmail,
  verifyIdToken,
} from '@molonlabe/spartan-stores';
import { ThenArg } from '@molonlabe/spartan-utils';

export type IContext = ThenArg<
  ReturnType<ThenArg<ReturnType<typeof buildAuthContext>>>
>;

export function buildAuthContext(auth: firebaseAuth.Auth) {
  const spartanAuth = {
    getUserById: getUserById(auth),
    getUserByEmail: getUserByEmail(auth),
    verifyIdToken: verifyIdToken(auth),
  };
  debug('Firestore initialized');
  return async function(event: any) {
    const { ip, token } = spartanHeaders(event);
    debug('Mongo connecting');
    debug('Mongo connected');

    const userId = await spartanAuth.verifyIdToken(token);
    const permissions = null; // await spartanAuth.authPermissions(userId);
    debug(userId, ip);
    return {
      ip,
      token,
      userId,
      permissions,
      spartanAuth,
    };
  };
}

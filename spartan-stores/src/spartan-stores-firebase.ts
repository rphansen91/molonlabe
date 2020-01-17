const debug = require('debug')('api:firebase');
import { auth } from 'firebase-admin';
import curry from 'lodash/curry';

export const verifyIdToken = curry(async function verifyIdToken(
  authInstance: auth.Auth,
  token: string
) {
  if (!token) return '';
  try {
    const user = await authInstance.verifyIdToken(token);
    return user.uid;
  } catch (e) {
    debug(e);
    return '';
  }
});

const debug = require('debug')('api:firebase');
import { auth } from 'firebase-admin';
import curry from 'lodash/curry';

export const getUserById = curry(async function getUserById(
  authInstance: auth.Auth,
  uid: string
) {
  if (!uid) return null;
  try {
    const user = await authInstance.getUser(uid);
    return user;
  } catch (e) {
    debug('Get user by id error', e);
    return null;
  }
});

export const getUserByEmail = curry(async function getUserByEmail(
  authInstance: auth.Auth,
  email: string
) {
  if (!email) return null;
  try {
    const user = await authInstance.getUserByEmail(email);
    return user;
  } catch (e) {
    debug('Get user by email error', e);
    return null;
  }
});

export const verifyIdToken = curry(async function verifyIdToken(
  authInstance: auth.Auth,
  token: string
) {
  if (!token) return '';
  try {
    const user = await authInstance.verifyIdToken(token);
    return user.uid;
  } catch (e) {
    debug('Verify user id error', e);
    return '';
  }
});

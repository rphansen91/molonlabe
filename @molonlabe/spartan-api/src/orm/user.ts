const debug = require('debug')('api:orm:user');
import { IFirebaseCollections } from '../types';
import { firestore, auth as fireAuth } from 'firebase-admin';
import curry from 'lodash/curry';

export const authPermissions = curry(async function authPermissions(
  firebase: firestore.Firestore,
  userId: string
) {
  if (!userId) return null;
  try {
    debug('Load user permissions', userId);
    const permissions = (
      await firebase
        .collection('coin_admins')
        .doc(userId)
        .get()
    ).data();
    debug('Loaded user permissions', userId);
    return permissions;
  } catch (e) {
    debug('User permissions error', userId, e);
    return null;
  }
});

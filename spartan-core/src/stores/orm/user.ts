const debug = require('debug')('api:orm:user');
import { IFirebaseCollections } from '../../types';
import curry from 'lodash/curry';

export const _authPermissions = curry(async function _authPermissions(
  firebase: IFirebaseCollections,
  userId: string
) {
  if (!userId) return null;
  try {
    debug('Load user permissions', userId);
    const permissions = (await firebase.permissions.doc(userId).get()).data();
    debug('Loaded user permissions', userId);
    return permissions;
  } catch (e) {
    debug('User permissions error', userId, e);
    return null;
  }
});

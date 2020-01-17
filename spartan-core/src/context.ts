const debug = require('debug')('api:context');

import { IConfig } from './config';
import { ormFactory } from './stores';
import { firestore, auth as firebaseAuth } from 'firebase-admin';
import { spartanHeaders } from '@molonlabe/spartan-auth';
import { connectionCache } from '@molonlabe/spartan-stores';
import { ThenArg } from '@molonlabe/spartan-utils';

export type IContext = ThenArg<
  ReturnType<ThenArg<ReturnType<typeof buildServerContext>>>
>;

export default function buildServerContext(config: IConfig) {
  const fireAuth = firebaseAuth();
  const fireApp = firestore();
  debug('Firestore initialized');
  debug('Mongo initializing');
  connectionCache(config.mongo.uri);
  debug('Mongo initialized');
  return async function(event: any) {
    const { ip, token } = spartanHeaders(event);
    debug('Mongo connecting');
    const connection = await connectionCache(config.mongo.uri);
    debug('Mongo connected');
    const db = connection.db(config.mongo.name);
    const orm = await ormFactory(db, fireApp, fireAuth);
    const userId = await orm.verifyIdToken(token);
    const permissions = await orm.authPermissions(userId);
    debug(userId, ip);
    return {
      ip,
      token,
      userId,
      permissions,
      config,
      orm,
    };
  };
}

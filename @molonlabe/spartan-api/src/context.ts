const debug = require('debug')('api:context');

import { IConfig } from './config';
import { firestore, auth as firebaseAuth } from 'firebase-admin';
import { buildAuthContext } from '@molonlabe/spartan-gql-auth';
import { buildAboutContext } from '@molonlabe/spartan-gql-about';
import { connectionCache } from '@molonlabe/spartan-stores';
import { ThenArg } from '@molonlabe/spartan-utils';
import { ormFactory } from './orm';
import { IFlow } from './flow';
import flow from 'lodash/flow';

type IUnwrapContext<
  T extends (...args: any[]) => (...args: any[]) => Promise<any>
> = ThenArg<ReturnType<ThenArg<ReturnType<T>>>>;
export type IContext = IUnwrapContext<typeof buildMolonlabeContext>;

type IEvent = {
  req: any;
  res: any;
};

export const spartanContextMiddleware: IFlow = (...middlewares) =>
  flow(
    ...middlewares.map(fn => async arg => {
      const value = await arg;
      const result = await fn(value);
      return { ...value, ...result };
    })
  );

export function buildMongoContext(config: IConfig) {
  debug('Mongo initializing');
  connectionCache(config.mongo.uri);
  debug('Mongo initialized');
  return async function() {
    debug('Mongo connecting');
    const connection = await connectionCache(config.mongo.uri);
    const mongo = connection.db(config.mongo.name);
    debug('Mongo connected');
    return {
      mongo,
    };
  };
}

export function buildOrmContext(config: IConfig) {
  const fireApp = firestore();
  const fireAuth = firebaseAuth();
  return async function(
    context: IUnwrapContext<typeof buildMongoContext> &
      IUnwrapContext<typeof buildAuthContext>
  ) {
    debug('Orm initializing');
    const orm = await ormFactory(context.mongo, fireApp, fireAuth);
    debug('Orm initializing');

    debug('Permissions loading');
    const permissions = await orm.authPermissions(context.userId);
    debug('Permissions loaded', context.userId, context.ip);

    return { orm, permissions };
  };
}

export const buildMolonlabeContext = (config: IConfig) => {
  return spartanContextMiddleware(
    buildAboutContext(config.about),
    buildAuthContext(firebaseAuth()),
    buildMongoContext(config),
    buildOrmContext(config)
  );
};

export default buildMolonlabeContext;

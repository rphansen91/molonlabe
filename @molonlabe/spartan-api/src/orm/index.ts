import { ThenArg } from '@molonlabe/spartan-utils';
import { firestore, auth as fireAuth } from 'firebase-admin';
import { mongoCollectionFactory, firebaseCollectionFactory } from '../types';
import { authPermissions } from './user';
import { Db } from 'mongodb';

export type IOrm = ThenArg<ReturnType<typeof ormFactory>>;

export async function ormFactory(
  db: Db,
  app: firestore.Firestore,
  auth: fireAuth.Auth
) {
  const mongo = mongoCollectionFactory(db);
  const firebase = firebaseCollectionFactory(app);
  return {
    authPermissions: authPermissions(app),
  };
}

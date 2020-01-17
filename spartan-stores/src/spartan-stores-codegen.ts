import { spartaStoresTypeDefs } from './spartan-stores-types';
import camelCase from 'lodash/camelCase';
import pickBy from 'lodash/fp/pickBy';
import isMatch from 'lodash/fp/isMatch';
import mapValues from 'lodash/mapValues';
import values from 'lodash/values';
import flow from 'lodash/flow';
import find from 'lodash/fp/find';
import get from 'lodash/fp/get';

export const addToSchema = spartaStoresTypeDefs;

const getAstNodeDirectives = get('astNode.directives');
const findArgumentsName = flow(
  get('arguments'),
  find(
    isMatch({
      name: { value: 'name' },
    })
  ),
  get('value.value')
);
const findDirectiveType = (name: string) =>
  flow(
    getAstNodeDirectives,
    find(
      isMatch({
        name: { value: name },
      })
    )
  );

const findSqlDirectiveType = findDirectiveType('sqlCollection');
const findFireDirectiveType = findDirectiveType('fireCollection');
const findMongoDirectiveType = findDirectiveType('mongoCollection');

function genSqlCollection(type: any, typeName: string) {
  const collection = findSqlDirectiveType(type);
  const collectionName = findArgumentsName(collection);
  const name = camelCase(collectionName);
  const resources = [
    `const ${name} = db.collection<${typeName}>('${collectionName}')`,
  ];
  const resourceNames = [name];
  return {
    name,
    typeName,
    resources,
    resourceNames,
  };
}

function genFireCollection(type: any, typeName: string) {
  const collection = findFireDirectiveType(type);
  const collectionName = findArgumentsName(collection);
  const name = camelCase(collectionName);
  const resources = [`const ${name} = db.collection('${collectionName}')`];
  const resourceNames = [name];
  return {
    name,
    typeName,
    resources,
    resourceNames,
  };
}

function genMongoCollection(type: any, typeName: string) {
  const collection = findMongoDirectiveType(type);
  const collectionName = findArgumentsName(collection);
  const name = camelCase(collectionName);
  const resources = [
    `const ${name} = db.collection<${typeName}>('${collectionName}')`,
  ];
  const resourceNames = [name];
  return {
    name,
    typeName,
    resources,
    resourceNames,
  };
}

function genSqlFactory(collections: any[]) {
  return '';
}
function genFireFactory(collections: any[]) {
  return `
import { firestore } from 'firebase-admin'

export type IFirebaseCollections = ReturnType<typeof firebaseCollectionFactory>;

export function firebaseCollectionFactory (db: firestore.Firestore) {
  ${collections.map(({ resources }) => resources.join('\n')).join('\n')}

  return {
    ${collections
      .map(({ resourceNames }) => resourceNames.join(',\n'))
      .join(',\n')}
  }
}
`;
}
function genMongoFactory(collections: any[]) {
  return `
import { Db as MongoDb } from 'mongodb';

export type IMongoCollections = ReturnType<typeof mongoCollectionFactory>;

export function mongoCollectionFactory (db: MongoDb) {
  ${collections.map(({ resources }) => resources.join('\n')).join('\n')}

  return {
    ${collections
      .map(({ resourceNames }) => resourceNames.join(',\n'))
      .join(',\n')}
  }
}
`;
}

export const plugin = (schema: any, documents: any, config: any, info: any) => {
  const typesMap = schema.getTypeMap();
  const sqlTypes = pickBy(findSqlDirectiveType, typesMap);
  const fireTypes = pickBy(findFireDirectiveType, typesMap);
  const mongoTypes = pickBy(findMongoDirectiveType, typesMap);
  const sqlCollections = mapValues(sqlTypes, genSqlCollection);
  const fireCollections = mapValues(fireTypes, genFireCollection);
  const mongoCollections = mapValues(mongoTypes, genMongoCollection);
  return [
    genSqlFactory(values(sqlCollections)),
    genFireFactory(values(fireCollections)),
    genMongoFactory(values(mongoCollections)),
  ].join('\n\n');
};

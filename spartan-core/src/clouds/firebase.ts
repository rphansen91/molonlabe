const debug = require('debug')('api');
import express from 'express';
import * as functions from 'firebase-functions';
import { ApolloServer } from 'apollo-server-express';
import { IConfig } from '../config';
import buildServerContext from '../context';
import {
  typeDefs,
  resolvers,
  schemaDirectives,
  getPlaygroundTabs,
} from '../gql';

const config = functions.config() as IConfig;

function initializeApp(config: IConfig) {
  const app = express();
  debug('Initializing');
  const tabs = getPlaygroundTabs(config.endpoint);
  const context = buildServerContext(config);
  const server = new ApolloServer({
    context,
    typeDefs,
    resolvers,
    schemaDirectives,
    introspection: true,
    playground: {
      tabs,
    },
  });
  debug('Initialized');
  server.applyMiddleware({ app, path: '/', cors: true });
  return app;
}

export const apollo = functions.https.onRequest(initializeApp(config));

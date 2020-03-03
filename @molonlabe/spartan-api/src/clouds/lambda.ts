const debug = require('debug')('api');
import { ApolloServer } from 'apollo-server-lambda';
import { initializeApp } from 'firebase-admin';
import buildServerConfig from '../config';
import buildServerContext from '../context';
import {
  typeDefs,
  resolvers,
  schemaDirectives,
  getPlaygroundTabs,
} from '../gql';

initializeApp();

const serverOptions = {
  cors: {
    origin: '*',
  },
};

const resolveServer = (async () => {
  debug('Initializing');
  const config = buildServerConfig();
  const tabs = getPlaygroundTabs(config.endpoint);
  const context = await buildServerContext(config);
  const apollo = new ApolloServer({
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
  return apollo;
})();

export const handler = (event: any, context: any, callback: any) => {
  context.callbackWaitsForEmptyEventLoop = false;
  resolveServer
    .then(server => server.createHandler(serverOptions))
    .then(handler => handler(event, context, callback))
    .catch((err: any) => {
      debug(err.message);
      callback(err);
    });
};

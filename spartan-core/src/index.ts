const debug = require('debug')('api');
debug('Server starting...');
debug('logging with debug enabled!');

import express from 'express';
import { initializeApp } from 'firebase-admin';
import { ApolloServer } from 'apollo-server-express';
import buildServerConfig, { IConfig } from './config';
import buildServerContext from './context';
import {
  typeDefs,
  resolvers,
  schemaDirectives,
  getPlaygroundTabs,
} from './gql';

const cors = {};
const path = '/';

initializeApp();
main()
  .then(handleSuccess)
  .catch(handleError);

async function main() {
  const app = express();
  const config = buildServerConfig();
  const tabs = getPlaygroundTabs(config.endpoint);
  const context = buildServerContext(config);
  const apollo = new ApolloServer({
    context,
    typeDefs,
    resolvers,
    schemaDirectives,
    playground: {
      tabs,
    },
  });

  apollo.applyMiddleware({
    app,
    cors,
    path,
  });

  return new Promise<IConfig>((res, rej) => {
    app.listen(config.port, err => {
      if (err) {
        rej(err);
      } else {
        res(config);
      }
    });
  });
}

function handleSuccess(config) {
  debug(`🚀 GraphQL listening at http://localhost:${config.port}`);
}

function handleError(err) {
  debug(`❌ GraphQL Boot Error`, err);
}

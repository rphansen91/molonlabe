const debug = require('debug')('api');
debug('Server starting...');
debug('logging with debug enabled!');

import { ApolloServer } from 'apollo-server-express';
import buildServerConfig, { IConfig } from './config';
import buildApolloOptions from './apollo';
import express from 'express';

async function main() {
  const app = express();
  const config = buildServerConfig();
  const options = await buildApolloOptions(config);
  const apollo = new ApolloServer(options);
  const cors = {};

  apollo.applyMiddleware({
    app,
    cors,
    path: '/',
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

main()
  .then(config =>
    debug(`🚀 GraphQL listening at http://localhost:${config.port}`)
  )
  .catch(err => debug(`❌ GraphQL Boot Error`, err));

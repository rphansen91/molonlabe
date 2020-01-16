import { ApolloServerExpressConfig } from 'apollo-server-express';
import {
  typeDefs,
  resolvers,
  schemaDirectives,
  getPlaygroundTabs,
} from './gql';
import buildServerContext from './context';
import { IConfig } from './config';

export default async function(
  config: IConfig
): Promise<ApolloServerExpressConfig> {
  const context = await buildServerContext(config);
  const endpoint = '';
  const tabs = getPlaygroundTabs(endpoint);
  return {
    typeDefs,
    resolvers,
    schemaDirectives,
    context,
    playground: {
      tabs,
    },
  };
}

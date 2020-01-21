import { mergeTypes } from 'merge-graphql-schemas';
import { spartaAuthTypeDefs } from '@molonlabe/spartan-auth';
import { spartaStoresTypeDefs } from '@molonlabe/spartan-stores';
import authTypeDefs from './auth/schema';

export { default as authTypeDefs } from './auth/schema';

export default mergeTypes([
  spartaStoresTypeDefs,
  spartaAuthTypeDefs,
  authTypeDefs,
]);

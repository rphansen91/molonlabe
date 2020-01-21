import { mergeTypes } from 'merge-graphql-schemas';
import aboutTypeDefs from './about/schema';

export { default as aboutTypeDefs } from './about/schema';

export default mergeTypes([aboutTypeDefs]);

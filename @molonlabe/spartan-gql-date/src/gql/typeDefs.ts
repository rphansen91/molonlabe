import { mergeTypes } from 'merge-graphql-schemas';
import spartaDateTypeDefs from './date/schema';

export default mergeTypes([spartaDateTypeDefs]);

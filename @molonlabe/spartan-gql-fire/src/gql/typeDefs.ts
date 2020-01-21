import { mergeTypes } from 'merge-graphql-schemas';
import spartaFireTypeDefs from './fire/schema';

export default mergeTypes([spartaFireTypeDefs]);

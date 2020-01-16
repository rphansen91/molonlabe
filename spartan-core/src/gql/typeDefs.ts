import { mergeTypes } from 'merge-graphql-schemas';
import about from './about/schema';
import root from './root/schema';

export default mergeTypes([about, root]);

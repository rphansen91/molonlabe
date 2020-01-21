import { mergeTypes } from 'merge-graphql-schemas';
import { spartanAuthTypeDefs } from '@molonlabe/spartan-gql-auth';
import { spartanAboutTypeDefs } from '@molonlabe/spartan-gql-about';

export default mergeTypes([spartanAuthTypeDefs, spartanAboutTypeDefs]);

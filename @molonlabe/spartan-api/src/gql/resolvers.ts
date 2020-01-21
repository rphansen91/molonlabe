import defaultsDeep from 'lodash/defaultsDeep';
import { spartanAuthResolvers } from '@molonlabe/spartan-gql-auth';
import { spartanAboutResolvers } from '@molonlabe/spartan-gql-about';

export default defaultsDeep({}, spartanAboutResolvers, spartanAuthResolvers);

import defaultsDeep from 'lodash/defaultsDeep';
import aboutResolvers from './about/resolvers';
import rootResolvers from './root/resolvers';

export default defaultsDeep({}, rootResolvers, aboutResolvers);

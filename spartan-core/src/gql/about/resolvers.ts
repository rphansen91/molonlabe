import { QueryResolvers } from '../../types';
import { IContext } from '../../context';

const Query: QueryResolvers<IContext> = {
  about: (_p, _a, { config }) => config.about,
};

export default {
  Query,
};

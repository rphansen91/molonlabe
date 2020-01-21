import { QueryResolvers } from '../../types';
import { IContext } from '../../context';

const Query: QueryResolvers<IContext> = {
  about: (_p, _a, { about }) => about,
};

export default {
  Query,
};

import { QueryResolvers, MutationResolvers } from '../../types';
import { IContext } from '../../context';

const Query: QueryResolvers<IContext> = {
  empty: () => '',
};

const Mutation: MutationResolvers<IContext> = {
  empty: () => '',
};

export default {
  Query,
  Mutation,
};

import {
  QueryResolvers,
  FirebaseUserResolvers,
  Permissions,
} from '../../types';
import { IContext } from '../../context';

const Query: QueryResolvers<IContext> = {
  me: (_p, _a, { spartanAuth, userId }) => spartanAuth.getUserById(userId),
  userById: (_p, { id }, { spartanAuth }) => spartanAuth.getUserById(id),
  userByEmail: (_p, { email }, { spartanAuth }) =>
    spartanAuth.getUserByEmail(email),
};

export const FirebaseUser: FirebaseUserResolvers<IContext> = {
  permissions: (_p, _a, { permissions }) => permissions as Permissions | null,
};

export default {
  Query,
  FirebaseUser,
};

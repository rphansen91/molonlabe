import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import { fromTimestamp } from './utils';

export const FirebaseTimestamp = new GraphQLScalarType({
  name: 'FirebaseTimestamp',
  description: 'Firebase timestamp custom scalar type',
  parseValue(value) {
    return fromTimestamp(value);
  },
  serialize(value) {
    return fromTimestamp(value).toISOString();
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value); // ast value is always in string format
    }
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value); // ast value is always in string format
    }
    if (ast.kind === Kind.OBJECT) {
      return fromTimestamp(
        ast.fields.reduce((acc, field) => ({
          ...acc,
          [field.name.value]: field.value,
        }))
      );
    }
    return null;
  },
});

import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

export const graphqlTypeDate = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  parseValue(value) {
    if (!value) return null;
    return new Date(value); // value from the client
  },
  serialize(value) {
    if (value && value.toString) return value.toString();
    return null; // value sent to the client
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value); // ast value is always in string format
    }
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value); // ast value is always in string format
    }
    return null;
  },
});

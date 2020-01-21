import gql from 'graphql-tag';

export const spartaAuthTypeDefs = gql`
  directive @permissions(creds: [String!]!) on FIELD_DEFINITION
  directive @auth on FIELD_DEFINITION
`;

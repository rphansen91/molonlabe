import gql from 'graphql-tag';

export const spartaStoresTypeDefs = gql`
  directive @fireCollection(name: String!) on OBJECT
  directive @mongoCollection(name: String!) on OBJECT
  directive @sqlCollection(name: String!) on OBJECT
`;

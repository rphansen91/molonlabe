import { gql } from 'apollo-server';

export default gql`
  type Users @mongoCollection(name: "users") {
    uid: String!
  }

  type Permissions @fireCollection(name: "permissions") {
    uid: String!
  }
`;

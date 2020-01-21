import gql from 'graphql-tag';

export default gql`
  type FirebaseUser {
    uid: String!
    email: String
    photoURL: String

    #computed fields
    permissions: Permissions
  }

  type Permissions @fireCollection(name: "permissions") {
    uid: String!
  }

  type Query {
    me: FirebaseUser @auth
    userById(id: String!): FirebaseUser @permissions(creds: ["read_user"])
    userByEmail(email: String!): FirebaseUser @permissions(creds: ["read_user"])
  }
`;

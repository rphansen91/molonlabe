import gql from 'graphql-tag';
import userFragment from './userFragment';

export default gql`
  query UserByEmail($email: String!) {
    userByEmail(email: $email) {
      ...User
      permissions {
        uid
      }
    }
  }

  ${userFragment}
`;

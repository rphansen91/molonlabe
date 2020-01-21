import gql from 'graphql-tag';
import userFragment from './userFragment';

export default gql`
  query UserById($id: String!) {
    userById(id: $id) {
      ...User
      permissions {
        uid
      }
    }
  }

  ${userFragment}
`;

import gql from 'graphql-tag';
import userFragment from './userFragment';

export default gql`
  query Me {
    me {
      ...User
      permissions {
        uid
      }
    }
  }

  ${userFragment}
`;

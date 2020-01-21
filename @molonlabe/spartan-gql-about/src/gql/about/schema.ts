import gql from 'graphql-tag';

export default gql`
  type About {
    name: String
    git: Git
  }

  type Git {
    sha: String
    url: String
  }

  type Query {
    about: About
  }
`;

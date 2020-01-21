import gql from 'graphql-tag';

gql`
  query About {
    about {
      git {
        url
        sha
      }
    }
  }
`;

import gql from 'graphql-tag';

export const AboutDocument = gql`
  query About {
    about {
      name
      git {
        sha
        url
      }
    }
  }
`;

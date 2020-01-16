import { gql } from 'apollo-server';

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

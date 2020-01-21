import gql from "graphql-tag";

gql`
  query Empty {
    empty
  }
`;

gql`
  query Customer {
    customer {
      id
      email
    }
  }
`;

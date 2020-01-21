import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Button, Welcome } from "@storybook/react/demo";
import { ApolloProvider } from "react-apollo";
import { getClient } from "../src/graphql.client";
import { ApolloHooksProvider, useQuery, Empty } from "../src/hooks.generated";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("Graph QL", module).add("Empty", () => {
  const client = getClient();
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider apolloClient={client}>
        <EmptyStory />
      </ApolloHooksProvider>
    </ApolloProvider>
  );
});

function EmptyStory() {
  const v = useQuery(Empty({}));
  return <pre>{JSON.stringify(v, null, 2)}</pre>;
}

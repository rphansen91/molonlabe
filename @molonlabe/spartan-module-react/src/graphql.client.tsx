import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";

type IStage = "local" | "development" | "production";
const LOCAL_URI = process.env.REACT_APP_SERVICE_URI;
const DEVELOPMENT_URI = process.env.REACT_APP_SERVICE_DEVELOPMENT_URI;
const PRODUCTION_URI = process.env.REACT_APP_SERVICE_PRODUCTION_URI;

const httpLink = (uri?: string | undefined) =>
  createHttpLink({
    fetchOptions: {
      timeout: 2000
    },
    uri
  });

export const getClientUri = (stage?: IStage) => {
  switch (stage) {
    case "local":
      return LOCAL_URI;
    case "development":
      return DEVELOPMENT_URI;
    default:
      return PRODUCTION_URI;
  }
};

export function getClient(
  stage?: IStage,
  getRequestContext?: () => Promise<any> | any
) {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: setContext(async (o: any, { headers }) => {
      try {
        const context = getRequestContext
          ? (await getRequestContext()) || {}
          : {};
        return { ...context, headers: { ...headers, ...context.headers } };
      } catch (e) {
        return { headers };
      }
    }).concat(httpLink(getClientUri(stage)))
  });
}

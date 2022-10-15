import { ApolloClient, InMemoryCache } from "@apollo/client";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${space}`,
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${accessToken}`, // add our access token header
  },
});

export default client;

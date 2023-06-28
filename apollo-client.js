import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://portfolio-backend-photography.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export default client;

import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  // TO DO: CREATE NEW URL OF GRAPHQL SERVER TO REPLACE BELOW
  uri: 'http://0.0.0.0:4000/',
  cache: new InMemoryCache()
});

export default client;
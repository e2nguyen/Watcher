import React from 'react';
import { ApolloProvider } from "@apollo/client";
import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

const { REACT_APP_FAUNA_SECRET } = process.env;

const ApolloWrapper = ({children}: {children: React.ReactNode}
  ): JSX.Element => {

    const client = new ApolloClient({
      uri: "https://graphql.us.fauna.com/graphql",
      headers: {
        authorization: `Bearer ${REACT_APP_FAUNA_SECRET}`,
      },
      cache: new InMemoryCache(),
    });

    return (
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    );
};

export default ApolloWrapper;
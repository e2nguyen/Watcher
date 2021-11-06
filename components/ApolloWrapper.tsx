import React from 'react';
import { ApolloProvider } from "@apollo/client";
import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";


const ApolloWrapper = ({children}: {children: React.ReactNode}
  ): JSX.Element => {

    const client = new ApolloClient({
      uri: "https://graphql.us.fauna.com/graphql",
      headers: {
        authorization: 'Bearer fnAEVMSosTAASA-uV48zyykFYJ3wsuU_RebTzT6p',
      },
      cache: new InMemoryCache(),
    });

    return (
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    )

}

export default ApolloWrapper;
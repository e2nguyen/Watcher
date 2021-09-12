import React from 'react';
import client from "./ApolloClient";
import { ApolloProvider } from "@apollo/client";

const ApolloWrapper = ({children}: {children: React.ReactNode}
  ): JSX.Element => {
    return (
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    )
}

export default ApolloWrapper;
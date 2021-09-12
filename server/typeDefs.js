import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    greetings: String
  }
`

export default typeDefs;
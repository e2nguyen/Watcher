import { ApolloServer } from "apollo-server";
import resolvers from './resolvers.js';   // unsure why we need to add .js here 
import typeDefs from './typeDefs.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await server.listen({ port: 4000 })
console.log(`this server is running at the following URL: ${url}`);

// export default () => {};
// add this later if using live express server
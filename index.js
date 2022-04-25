import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolver";

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql", /* Query (Request) */
    resolvers: resolvers /* Resolver (Response) */
});

server.start(() => console.log("GraphQL Server Running"));
import { graphqlHTTP } from "express-graphql";
import { addMocksToSchema, makeExecutableSchema } from "graphql-tools";
import { LoginResolver, LoginTypeDef } from "../models/schema/login.graphql";

const typeRoot = `type Query {
    hello: String
  }`;
const mocks = {
  String: () => 'hector'
}
const schema = makeExecutableSchema({
typeDefs: [typeRoot, LoginTypeDef],
resolvers: [LoginResolver]
});
const schemaWithMock = addMocksToSchema({
  schema: schema,
  mocks,
  preserveResolvers: true
})
var root = { hello: () => "Olá Conta Simples" };
const graphql = graphqlHTTP({
schema: schemaWithMock,
rootValue: root
});

export default graphql;
import { graphqlHTTP } from "express-graphql";
import { addMocksToSchema, makeExecutableSchema } from "graphql-tools";
import { LoginResolver, LoginTypeDef } from "../models/schema/login.graphql";
import mocks from "../mocks/mocks";
import { EmpresaTypeDef } from "../models/schema/empresa.graphql";
const typeRoot = `type Query {
    hello: String
  }`;

const schema = makeExecutableSchema({
typeDefs: [typeRoot, LoginTypeDef, EmpresaTypeDef],
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
rootValue: root,
graphiql: true
});

export default graphql;
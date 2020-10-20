import { MockList } from "graphql-tools";

const EmpresaTypeDef = `
type Empresa {
	empresaId: ID!
	nomeEmpresa: String!
	cnpj: String!
	dadosBancario: DadosBancario
	saldo: Float!
}
type DadosBancario {
	agencia: Int!	
	banco: Int!    
	bancoNome: String!
	conta: Int!
	digitoConta: String!
}

extend type Query {
	empresas: [Empresa!]!	
}

`;
const EmpresaResolver = {
    Query: {
       empresas: () => new MockList(3)
    },
    Mutation: {        
    }
};

export { EmpresaTypeDef, EmpresaResolver };
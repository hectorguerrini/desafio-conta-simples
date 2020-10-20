import { company, random } from "faker";
const mocks = {
	ID: () => random.uuid(),
	Empresa: () => ({
		empresaId: () => 1,
		nomeEmpresa: () => company.companyName(),		
		cnpj: () => random.number({min: 1000000000000, max: 9999999999999}).toString(),		
		saldo: () => random.float({min:1000})
	}),
    DadosBancario: () => ({		
        conta: () => random.number({min: 100000, max:999999}),
		banco: () => 999,
		agencia: () => 1,       
		digitoConta: () => "1",
		bancoNome: () => "CONTA SIMPLES"
	}),		
    String: () => 'hector'
  }
export default mocks;
import { random } from "faker";
const mocks = {
    ID: () => random.uuid(),
    DadoBancario: () => ({
        Int: () => random.number({min: 100000, max:999999}),
        Banco: () => 999,       
    }),
    String: () => 'hector'
  }
export default mocks;
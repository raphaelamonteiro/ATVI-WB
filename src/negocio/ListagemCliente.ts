import Cliente from "../models/Cliente";
import Listagem from "./Listagem";

export default class ListagemClientes extends Listagem {
  private clientes: Array<Cliente>;

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
  }

  public listar(): void {
    console.log(`\nLista de todos os clientes:`);
    this.clientes.forEach((cliente) => {
      console.log(`Nome: ${cliente.nome}`);
      console.log(`Nome social: ${cliente.nomeSocial}`);
      console.log(`Gênero: ${cliente.getGenero}`); // Exibe o gênero diretamente
      console.log(`CPF: ${cliente.getCpf.getValor()}`); // Acessa o valor do CPF
      console.log(
        `RG: ${cliente.getRgs.map((rg) => rg.getValor()).join(", ")}`
      ); // Itera sobre os RGs e os exibe
      console.log(`--------------------------------------`);
    });
    console.log(`\n`);
  }
}

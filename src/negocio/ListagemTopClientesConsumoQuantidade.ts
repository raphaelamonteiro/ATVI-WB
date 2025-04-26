import Cliente from "../models/Cliente";

export default class ListagemTopClientesConsumoQuantidade {
  private clientes: Array<Cliente>;

  constructor(clientes: Array<Cliente>) {
    this.clientes = clientes;
  }

  public listar(): void {
    let clientesOrdenados = this.clientes.sort(
      (a, b) => b.getProdutosConsumidos.length - a.getServicosConsumidos.length
    );
    let top10 = clientesOrdenados.slice(0, 10);

    console.log(`\nTop 10 clientes que mais consumiram (por quantidade):`);
    top10.forEach((cliente) => {
      console.log(`Nome: ${cliente.nome}`);
      console.log(
        `Quantidade de serviços consumidos: ${cliente.getServicosConsumidos.length}`
      );
      console.log(
        `Quantidade de produtos consumidos: ${cliente.getProdutosConsumidos.length}`
      );
      console.log(`--------------------------------------`);
    });
    console.log(`\n`);
  }
}

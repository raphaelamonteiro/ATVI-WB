import Produto from "../models/Produto";
import Listagem from "./Listagem";

export default class ListagemProdutos extends Listagem {
  private produtos: Array<Produto>;

  constructor(produtos: Array<Produto>) {
    super();
    this.produtos = produtos;
  }

  public listar(): void {
    console.log(`\nLista de todos os produtos:`);
    this.produtos.forEach((produto) => {
      // Corrigido para 'produto', pois estamos lidando com produtos
      console.log(`Nome: ` + produto.nome); // Usar 'produto.nome', não 'Produto.nome'
      console.log(`Valor: ` + produto.valor); // 'valor' é um número, então não precisa de getValor()
      console.log(`--------------------------------------`);
    });
    console.log(`\n`);
  }
}

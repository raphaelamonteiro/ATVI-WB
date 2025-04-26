import Entrada from "../io/entrada";
import Produto from "../models/Produto";
import Cadastro from "./Cadastro";

export default class CadastroProduto extends Cadastro {
  private produtos: Array<Produto>;
  private entrada: Entrada;

  constructor(produtos: Array<Produto>) {
    super();
    this.produtos = produtos;
    this.entrada = new Entrada();
  }

  public cadastrar(): void {
    console.log(`\nInício do cadastro do produto`);

    let nome = this.entrada.receberTexto(
      `Por favor informe o nome do produto: `
    );
    let valor = this.entrada.receberNumero(
      `Por favor informe o valor do produto: `
    );

    let produto = new Produto(nome, valor); // Convertendo valor para número

    this.produtos.push(produto); // Agora estamos passando o objeto produto

    console.log(`\nCadastro concluído :)\n`);
  }
}

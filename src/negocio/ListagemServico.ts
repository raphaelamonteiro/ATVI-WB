import Servico from "../models/Servico";
import Listagem from "./Listagem";

export default class ListagemServicos extends Listagem {
  private servicos: Array<Servico>;

  constructor(servicos: Array<Servico>) {
    super();
    this.servicos = servicos;
  }

  public listar(): void {
    console.log(`\nLista de todos os serviços:`);
    this.servicos.forEach((servico) => {
      // Corrigido para 'produto', pois estamos lidando com produtos
      console.log(`Nome: ` + servico.nome); // Usar 'produto.nome', não 'Produto.nome'
      console.log(`Valor: ` + servico.valor); // 'valor' é um número, então não precisa de getValor()
      console.log(`--------------------------------------`);
    });
    console.log(`\n`);
  }
}

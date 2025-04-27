import Entrada from "../io/entrada";
import Servico from "../models/Servico";
import Cadastro from "./Cadastro";

export default class CadastroServico extends Cadastro {
  private servicos: Array<Servico>;
  private entrada: Entrada;

  constructor(servicos: Array<Servico>) {
    super();
    this.servicos = servicos;
    this.entrada = new Entrada();
  }

  public cadastrar(): void {
    console.log(`\nInício do cadastro do serviço`);

    let nome = this.entrada.receberTexto(
      `Por favor informe o nome do serviço: `
    );
    let valor = this.entrada.receberNumero(
      `Por favor informe o valor do serviço: `
    );

    let servico = new Servico(nome, valor); // Convertendo valor para número

    this.servicos.push(servico); // Agora estamos passando o objeto produto

    console.log(`\nCadastro concluído :)\n`);
  }
}

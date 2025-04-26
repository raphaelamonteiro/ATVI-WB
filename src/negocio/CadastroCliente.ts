import Entrada from "../io/entrada";
import Cliente from "../models/Cliente";
import CPF from "../models/CPF";
import Cadastro from "./Cadastro";

export default class CadastroCliente extends Cadastro {
  private clientes: Array<Cliente>;
  private entrada: Entrada;

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
    this.entrada = new Entrada();
  }

  public cadastrar(): void {
    console.log(`\nInício do cadastro do cliente`);

    let nome = this.entrada.receberTexto(
      `Por favor informe o nome do cliente: `
    );
    let nomeSocial = this.entrada.receberTexto(
      `Por favor informe o nome social do cliente: `
    );
    let valor = this.entrada.receberTexto(
      `Por favor informe o número do cpf: `
    );
    let data = this.entrada.receberTexto(
      `Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `
    );

    let partesData = data.split("/");
    let ano = Number(partesData[2]);
    let mes = Number(partesData[1]);
    let dia = Number(partesData[0]);
    let dataEmissao = new Date(ano, mes - 1, dia); // mês - 1 aqui!

    let cpf = new CPF(valor, dataEmissao);
    let cliente = new Cliente(nome, nomeSocial, cpf);

    this.clientes.push(cliente);

    console.log(`\nCadastro concluído :)\n`);
  }
}

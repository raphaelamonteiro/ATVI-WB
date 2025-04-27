import Entrada from "../io/entrada";
import Cliente from "../models/Cliente";
import CPF from "../models/CPF";
import RG from "../models/RG"; // Importando também RG
import { Genero } from "../models/Genero";
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

    // Entradas básicas
    let nome = this.entrada.receberTexto(
      `Por favor informe o nome do cliente: `
    );
    let nomeSocial = this.entrada.receberTexto(
      `Por favor informe o nome social do cliente: `
    );

    // Gênero
    let generoInput = this.entrada.receberTexto(
      `Por favor informe o gênero do cliente (Masculino, Feminino, Outro, Não especificado): `
    );

    let genero: Genero;
    switch (generoInput.toLowerCase()) {
      case "masculino":
        genero = Genero.Masculino;
        break;
      case "feminino":
        genero = Genero.Feminino;
        break;
      case "outro":
        genero = Genero.Outro;
        break;
      case "não especificado":
      case "nao especificado":
        genero = Genero.NaoEspecificado;
        break;
      default:
        console.log("Gênero inválido. Considerando 'Não especificado'.");
        genero = Genero.NaoEspecificado;
        break;
    }

    // CPF
    let valorCpf = this.entrada.receberTexto(
      `Por favor informe o número do CPF (apenas números): `
    );
    let dataCpf = this.entrada.receberTexto(
      `Por favor informe a data de emissão do CPF, no padrão dd/mm/yyyy: `
    );
    let partesCpf = dataCpf.split("/");
    let dataEmissaoCpf = new Date(
      Number(partesCpf[2]),
      Number(partesCpf[1]) - 1,
      Number(partesCpf[0])
    );
    let cpf = new CPF(valorCpf, dataEmissaoCpf);

    // RG
    let valorRg = this.entrada.receberTexto(
      `Por favor informe o número do RG: `
    );
    let dataRg = this.entrada.receberTexto(
      `Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `
    );
    let partesRg = dataRg.split("/");
    let dataEmissaoRg = new Date(
      Number(partesRg[2]),
      Number(partesRg[1]) - 1,
      Number(partesRg[0])
    );
    let rg = new RG(valorRg, dataEmissaoRg);

    // Criando o cliente
    let cliente = new Cliente(nome, nomeSocial, cpf, genero);

    // Adicionando o RG no cliente
    cliente.getRgs.push(rg);

    // Salvando o cliente
    this.clientes.push(cliente);

    console.log(`\nCadastro concluído com sucesso :)\n`);
  }
}

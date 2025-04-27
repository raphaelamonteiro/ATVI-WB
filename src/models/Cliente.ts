import CPF from "./CPF";
import Produto from "./Produto";
import RG from "./RG";
import { Genero } from "./Genero"; // Importa a enumeração Genero
import Servico from "./Servico";
import Telefone from "./Telefone";

export default class Cliente {
  public nome: string;
  public nomeSocial: string;
  private genero: Genero;
  private cpf: CPF;
  private rgs: Array<RG>;
  private dataCadastro: Date;
  private telefones: Array<Telefone>;
  private produtosConsumidos: Array<Produto>;
  private servicosConsumidos: Array<Servico>;

  constructor(nome: string, nomeSocial: string, cpf: CPF, genero: Genero) {
    this.nome = nome;
    this.nomeSocial = nomeSocial;
    this.cpf = cpf;
    this.genero = genero;
    this.rgs = [];
    this.dataCadastro = new Date();
    this.telefones = [];
    this.produtosConsumidos = [];
    this.servicosConsumidos = [];
  }

  // Métodos de acesso para o campo 'genero'
  public get getGenero(): Genero {
    return this.genero;
  }

  public set setGenero(genero: Genero) {
    this.genero = genero;
  }

  public get getCpf(): CPF {
    return this.cpf;
  }

  public get getRgs(): Array<RG> {
    return this.rgs;
  }

  public get getDataCadastro(): Date {
    return this.dataCadastro;
  }

  public get getTelefones(): Array<Telefone> {
    return this.telefones;
  }

  public adicionarTelefone(telefone: Telefone): void {
    this.telefones.push(telefone);
  }

  public adicionarProduto(produto: Produto): void {
    this.produtosConsumidos.push(produto);
  }

  public adicionarServico(servico: Servico): void {
    this.servicosConsumidos.push(servico);
  }

  public get getProdutosConsumidos(): Array<Produto> {
    return this.produtosConsumidos;
  }

  public get getServicosConsumidos(): Array<Servico> {
    return this.servicosConsumidos;
  }
}

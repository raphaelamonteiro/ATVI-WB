export default class Cliente {
  private nome: string;
  private nomeSocial: string;
  private cpf: string;
  private dataEmissaoCpf: Date;
  private genero: string;
  private telefones: { ddd: string; numero: string }[] = [];
  private produtosConsumidos: any[] = [];
  private servicosConsumidos: any[] = [];

  constructor(
    nome: string,
    nomeSocial: string,
    cpf: string,
    dataEmissaoCpf: Date,
    genero: string
  ) {
    this.nome = nome;
    this.nomeSocial = nomeSocial;
    this.cpf = cpf;
    this.dataEmissaoCpf = dataEmissaoCpf;
    this.genero = genero;
  }
}

import Entrada from "../io/entrada";
import Empresa from "../models/Empresa";
import CadastroCliente from "../negocio/CadastroCliente";
import CadastroProduto from "../negocio/CadastroProduto";
import CadastroServico from "../negocio/CadastroServico";
import ListagemClientes from "../negocio/ListagemCliente";
import ListagemProdutos from "../negocio/ListagemProduto";
import ListagemServicos from "../negocio/ListagemServico"; // Adicionando a importação da classe ListagemServicos

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`);
let empresa = new Empresa();
let execucao = true;

while (execucao) {
  console.log(`Opções:`);
  console.log(`1 - Cadastrar cliente`);
  console.log(`2 - Cadastrar produto`);
  console.log(`3 - Cadastrar serviço`);

  console.log(`4 - Listar todos os clientes`);
  console.log(`5 - Listar todos os produtos`);
  console.log(`6 - Listar todos os serviços`);

  console.log(`0 - Sair`);

  let entrada = new Entrada();
  let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);

  switch (opcao) {
    case 1:
      const cadastroCliente = new CadastroCliente(empresa.getClientes); // Usando um nome de variável único
      cadastroCliente.cadastrar();
      break;
    case 2:
      const cadastroProduto = new CadastroProduto(empresa.getProdutos); // Nome único para cada caso
      cadastroProduto.cadastrar();
      break;
    case 3:
      const cadastroServico = new CadastroServico(empresa.getServicos); // Nome único para cada caso
      cadastroServico.cadastrar();
      break;
    case 4:
      let listagemClientes = new ListagemClientes(empresa.getClientes); // Nome único para a variável
      listagemClientes.listar();
      break;
    case 5:
      let listagemProdutos = new ListagemProdutos(empresa.getProdutos); // Nome único para a variável
      listagemProdutos.listar();
      break;
    case 6:
      let listagemServicos = new ListagemServicos(empresa.getServicos); // Nome único para a variável
      listagemServicos.listar();
      break;
    case 0:
      execucao = false;
      console.log(`Até mais`);
      break;
    default:
      console.log(`Operação não entendida :(`);
  }
}

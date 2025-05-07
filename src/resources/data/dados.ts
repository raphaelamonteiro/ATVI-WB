import Cliente from "../../models/Cliente";
import Produto from "../../models/Produto";
import Servico from "../../models/Servico";
import CPF from "../../models/CPF";
import RG from "../../models/RG";
import Telefone from "../../models/Telefone";

const clientesPop: Cliente[] = [];
const produtosPop: Produto[] = [];
const servicosPop: Servico[] = [];

// Primeiro popula os produtos
const nomesProdutos = [
  "Gel de Limpeza Facial Equilibrante",
  "Sérum Anti-Idade",
  "Água Micelar Purificante",
  "Máscara Facial de Argila Purificante",
  "Espuma de Limpeza Suave",
  "Protetor Solar Facial com FPS 30/50+",
  "Hidratante Labial com Manteiga de Karité",
  "Tônico Facial Hidratante com Ácido Hialurônico",
  "Sérum Facial Antioxidante com Vitamina C",
  "Creme Hidratante Facial de Uso Diurno com FPS 30",
  "Bálsamo Reparador para Área dos Olhos",
  "Ácido Salicílico para Acne",
  "Hidratante Corporal de Textura Leve",
  "Gel Calmante Pós-Barba e Pós-Depilação",
  "Leave-in com Proteção Térmica",
  "Sérum Capilar Anti-Frizz",
  "Creme Revitalizante Noturno",
  "Bruma Facial Refrescante e Hidratante",
  "Condicionador Suavizante com Aloe Vera",
  "Shampoo Fortificante com Jaborandi",
];

nomesProdutos.forEach((nome, index) => {
  const id = `P${index + 1}`;
  const preco = (25 + index * 3).toFixed(2);
  produtosPop.push(new Produto(id, nome, preco));
});

// Agora popula os serviços
const nomesServicos = [
  "Manicure Completa com Esfoliação e Hidratação",
  "Pedicure Simples",
  "Corte de Cabelo Feminino",
  "Corte de Cabelo Masculino",
  "Reconstrução Capilar",
  "Hidratação Capilar Profunda",
  "Tratamento Capilar Antiqueda (sessão)",
  "Radiofrequência Facial (sessão)",
  "Massagem Modeladora (sessão)",
  "Vacuoterapia (sessão)",
  "Drenagem Linfática Corporal (sessão)",
  "Drenagem Linfática Facial",
  "Limpeza de Pele Profunda",
  "Aplicação de Henna nas Sobrancelhas",
  "Design de Sobrancelhas com Linha",
  "Peeling Facial",
  "Microagulhamento Facial",
  "Tratamento para Cravos e Espinhas",
  "Revitalização Corporal",
  "Barbear Terapêutico Masculino",
];

nomesServicos.forEach((nome, index) => {
  const id = `S${index + 1}`;
  const preco = (60 + index * 5).toFixed(2);
  servicosPop.push(new Servico(id, nome, preco));
});

// Agora sim, popula os clientes com consumos válidos
for (let i = 1; i <= 30; i++) {
  const nome = `Cliente ${i}`;
  const nomeSocial = `Cliente Social ${i}`;
  const genero = i % 2 === 0 ? "F" : "M";

  const cpfNumero = `000.000.000-${((i % 90) + 10)
    .toString()
    .padStart(2, "0")}`;
  const cpf = new CPF(cpfNumero, new Date(1990, 0, i));

  const rgNumero = `${i}`.padStart(9, "0");
  const rg = new RG(rgNumero, new Date(2005, 0, i));

  const ddd = "11";
  const numeroTel = `9${Math.floor(10000000 + Math.random() * 8999999)}`;
  const telefone = new Telefone(ddd, numeroTel);

  const dataCadastro = new Date();

  const cliente = new Cliente(
    nome,
    nomeSocial,
    genero,
    cpf,
    rg,
    telefone,
    dataCadastro
  );

  // Adiciona entre 1 a 5 produtos e serviços aleatórios
  const qtdProdutos = Math.floor(Math.random() * 5) + 1;
  const qtdServicos = Math.floor(Math.random() * 5) + 1;

  for (let j = 0; j < qtdProdutos; j++) {
    const produtoAleatorio =
      produtosPop[Math.floor(Math.random() * produtosPop.length)];
    cliente.consumirProduto(produtoAleatorio);
  }

  for (let j = 0; j < qtdServicos; j++) {
    const servicoAleatorio =
      servicosPop[Math.floor(Math.random() * servicosPop.length)];
    cliente.consumirServico(servicoAleatorio);
  }

  clientesPop.push(cliente);
}

export { clientesPop, produtosPop, servicosPop };

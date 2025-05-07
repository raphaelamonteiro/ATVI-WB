# 📚 Atividade prática ATVI  
**Professor:** [Gerson da Penha Neto](https://github.com/gerson-pn)

---

## 🚀 Tecnologias utilizadas
<div style="display: flex; gap: 10px;">
  <img align="center" alt="TypeScript" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"/>
  <img align="center" alt="VSCode" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
</div>

---

## ☕ Contextualização
Muitos microempresários não possuem um programa de cadastro de clientes. Eles acreditam que cadastrar clientes é uma tarefa que demanda muito tempo e não traz retorno, mas isso é um erro.  
**Sem uma base de dados de clientes, não é possível obter informações relevantes sobre seus consumidores.**

O cadastro de clientes é fundamental para melhorar as vendas de uma empresa, principalmente empresas pequenas como:
- Cabeleireiros
- Academias
- Diversas modalidades do setor de serviços

Um bom programa de cadastro permite:
- Contato mais próximo com os clientes
- Conhecimento sobre as preferências individuais
- Melhora nas estratégias de marketing e promoções personalizadas

**Pontos principais sobre o cadastro:**
- Começar pelos dados mais relevantes
- Manter os clientes sempre atualizados sobre novidades
- Ofertar produtos ou serviços complementares
- Criar uma base para análise estratégica futura

---

## 💡 Atividade proposta
Você é um empreendedor que está iniciando sua empresa.  
Um dos primeiros clientes é o **💄 Grupo World Beauty (WB)**, que atua no ramo da estética, oferecendo:
- Serviços para o público feminino: manicure, pedicure, design de sobrancelhas, corte e pintura de cabelos, estética facial (remoção de rugas, manchas, Botox) e tratamentos para emagrecimento.
- Serviços para o público masculino: barbearia, modelagem de barba, corte de cabelo, tratamento para queda de cabelo e venda de produtos especializados.

### 🎯 Objetivo:
Desenvolver uma **Agenda de Clientes** para o grupo WB.

- Sistema **CLI** (Command-Line Interface)
- Cada unidade terá **sua própria agenda** (dados não compartilhados)

---

## 🛠️ Funcionalidades obrigatórias
- 📄 CRUD (Create, Read, Update e Delete) de clientes
- 📄 CRUD de produtos ou serviços
- 🛒 Registro de consumo de produtos ou serviços por cliente
- 📋 Relatórios e listagens:

  1. Top 10 clientes que mais consumiram (por quantidade)
  2. Listagem de clientes separados por gênero
  3. Produtos ou serviços mais consumidos (geral)
  4. Produtos ou serviços mais consumidos por gênero
  5. Top 10 clientes que menos consumiram (por quantidade)
  6. Top 5 clientes que mais gastaram (por valor $$)

---

## ✅ Pré-requisitos

Antes de rodar o sistema, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- npm (vem junto com o Node.js)

Verifique se estão instalados com:

```bash
node -v
npm -v
```

---

## ▶️ Como executar o projeto

1. **Clone este repositório:**

```bash
git clone https://github.com/raphaelamonteiro/ATVI-WB.git
cd nome-da-pasta
```

2. **Instale as dependências:**

```bash
npm install typescript ts-node @types/node --save-dev
```

3. **Execute o sistema:**

```bash
npx ts-node src/app/main.ts
```

> Obs: o projeto é executado via CLI (linha de comando) e não possui interface gráfica.

---

## 🧩 Materiais de apoio
A equipe de TI do grupo WB forneceu um diagrama de classes e um repositório base para auxiliar:  
🔗 [Repositório auxiliar - atvi-wb-typescript](https://github.com/gerson-pn/atvi-wb-typescript)

> Observação: Grande parte do que o grupo precisa ainda **não está implementado** no repositório de apoio.

---

## 🏁 Considerações finais
Este projeto tem como objetivo estimular:
- A organização de código com **boas práticas**
- O uso de **TypeScript** aplicado à orientação a objetos
- A criação de **interfaces de linha de comando** (CLI) simples, mas funcionais
- A aplicação prática de conceitos de **CRUD** e **análises básicas de dados**

---
> Feito com 💙 e dedicação!

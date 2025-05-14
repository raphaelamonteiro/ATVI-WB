# 🧾 Atividade prática **ATVI – Sistema CLI**

**Professor:** [Gerson da Penha Neto](https://github.com/gerson-pn)

---

## 🚀 Tecnologias utilizadas

<div style="display: flex; gap: 10px;">
  <img align="center" alt="TypeScript" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"/>
  <img align="center" alt="VSCode" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
</div>

---

## ☕ Contextualização

Muitos microempreendedores ainda não possuem um sistema organizado de **cadastro de clientes**. Acreditam que essa prática é demorada ou desnecessária — o que é um equívoco.

Sem uma **base de dados**, é impossível aplicar ações estratégicas como:

* Promoções personalizadas
* Melhoria no relacionamento com clientes
* Campanhas de fidelização
* Aumento do ticket médio

Um sistema simples de cadastro pode beneficiar diretamente negócios como:

* Salões de beleza
* Academias
* Barbearias
* Clínicas de estética e outros serviços

---

## 💡 Atividade proposta

Você está começando sua jornada como empreendedor e recebeu seu primeiro cliente: o **💄 Grupo World Beauty (WB)**.

A empresa atua com serviços estéticos voltados para públicos feminino e masculino, como:

* Manicure, pedicure, corte e coloração de cabelos, estética facial, tratamentos para emagrecimento
* Barbearia, modelagem de barba, venda de cosméticos especializados e tratamento capilar

### 🎯 Objetivo:

Desenvolver uma **Agenda de Clientes via terminal (CLI)** com funcionalidades essenciais para o negócio.

* Cada unidade do grupo WB terá sua **agenda independente**
* Projeto em **TypeScript**, rodando via **linha de comando (Node.js)**

---

## 🛠️ Funcionalidades obrigatórias

* 📄 **CRUD completo** de:

  * Clientes
  * Produtos e/ou serviços
* 🛒 Registro de consumo de clientes
* 📋 Relatórios e listagens automáticas:

  1. Top 10 clientes que mais consumiram (por quantidade)
  2. Listagem de clientes separados por gênero
  3. Produtos/serviços mais consumidos (geral)
  4. Produtos/serviços mais consumidos por gênero
  5. Top 10 clientes que menos consumiram
  6. Top 5 clientes que mais gastaram (por valor)

---

## ✅ Pré-requisitos

Antes de rodar o sistema, certifique-se de ter instalado:

* [Node.js](https://nodejs.org/) (versão 14 ou superior)
* npm (vem junto com o Node.js)

Verifique com:

```bash
node -v
npm -v
```

---

## ▶️ Como executar o projeto

1. **Clone este repositório:**

```bash
git clone https://github.com/raphaelamonteiro/ATVI-WB.git
cd ATVI-WB
```

2. **Instale as dependências:**

```bash
npm install typescript ts-node @types/node --save-dev
```

3. **Execute o sistema CLI:**

```bash
npx ts-node src/app/main.ts
```

> ⚠️ O sistema funciona apenas no **terminal (CLI)** e **não possui interface gráfica**.

---
## 🧩 Materiais de apoio

A equipe WB forneceu:

* 🔗 [Repositório base com estrutura inicial](https://github.com/gerson-pn/atvi-wb-typescript)
* 📌 [Diagrama de classes proposto](https://github.com/gerson-pn/atvi-wb-typescript#readme)

---

> Feito com 💙 e dedicação!
> Por [Raphaela Monteiro](https://github.com/raphaelamonteiro)

---

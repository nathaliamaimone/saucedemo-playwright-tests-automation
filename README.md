# Swag Labs - Playwright Tests Automation

Este projeto é uma suite de testes automatizados para a aplicação web **Swag Labs**, desenvolvida com **Playwright**.

## Como Executar o Projeto

### Pré-requisitos

- Node.js
- NPM (geralmente instalado com o Node.js)

### Instalação

1. Clonar o repositório:

   ```bash
   git clone https://github.com/seu-usuario/sauce-demo-playwright-tests-automation.git

2. Navegue até a pasta do projeto:

   ```bash
   cd sauce-demo-playwright-tests-automation
   
3. Instalar as dependências:

   ```bash
   npm install

4. Instalar binários do navegador:

   ```bash
   npx playwright install

### Executando os Testes

 - Para rodar todos os testes:

   ```bash
   npx playwright test

 - Para rodar testes específicos:

   ```bash
   npx playwright test tests/inventory.spec.js

### Executar os Testes e Visualizar o Relatório

 - De forma manual:

   ```bash
   npm run report

 - Executar testes e abrir o relatório:

   ```bash
   npm run test:with-report


### Estrutura do Projeto 

```bash
sauce-demo-playwright-tests-automation/
├── pages/                         # Classes de Page Objects
│   ├── LoginPage.js               # Página de login
│   ├── InventoryPage.js           # Página de inventário (produtos)
│   ├── CartPage.js                # Página do carrinho
│   └── CheckoutPage.js            # Página de checkout
├── tests/
│   ├── login.spec.js              # Testes de login
│   ├── inventory.spec.js          # Testes de inventário (produtos)
│   ├── cart.spec.js               # Testes do carrinho
│   └── checkout.spec.js           # Testes de checkout
├── ortoni-report/                 
│   └── ortoni-report.html         # Relatório HTML
├── utils/
│   └── global.setup.js            # Arquivo de setup global
├── .gitignore                     # Arquivos e pastas ignorados pelo Git
├── package.json                   # Dependências e scripts do projeto
├── package-lock.json              # Versões exatas das dependências
├── playwright.config.ts           # Configurações do Playwright
└── README.md                      # Documentação do projeto                   

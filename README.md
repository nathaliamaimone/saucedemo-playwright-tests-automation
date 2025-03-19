# Swag Labs - Playwright Tests Automation

Este projeto é uma suite de testes automatizados para a aplicação web **Swag Labs**, desenvolvida com **Playwright**.

## Como Executar o Projeto

### Pré-requisitos

- Node.js
- NPM (geralmente instalado com o Node.js)

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/sauce-demo-playwright-tests-automation.git

2. Navegue até a pasta do projeto:

   ```bash
   cd sauce-demo-playwright-tests-automation
   
3. Instale as dependências:

   ```bash
   npm install

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
├── node_modules/
├── ortoni-report/                
├── pages/                         
│   ├── LoginPage.js               
│   ├── InventoryPage.js           
│   ├── CartPage.js                
│   └── CheckoutPage.js            
├── tests/
│   ├── global-setup/
│       ├── global.setup.js                   
│   ├── login.spec.js              
│   ├── inventory.spec.js          
│   ├── cart.spec.js               
│   └── checkout.spec.js      
├── package.json               
├── package-lock.json    
├── playwright.config.ts
└── README.md                      

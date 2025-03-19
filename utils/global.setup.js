import { chromium } from '@playwright/test';
import { STORAGE_STATE } from '../playwright.config.js';

export default async function globalSetup() {
  console.log('Execução da configuração global.');

  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.waitForURL(/.*inventory.html/);

  await page.context().storageState({ path: STORAGE_STATE });
  console.log('Estado da sessão guardado com sucesso. Iniciando os testes.');

  await browser.close();
}
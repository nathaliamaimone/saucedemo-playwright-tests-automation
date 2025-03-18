import { expect, test as setup } from '@playwright/test';
import { STORAGE_STATE } from '../playwright.config';

setup('Perform Login Action', async ({ page }) => {
  console.log('Execução da configuração global.');

  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL(/.*inventory.html/);

  await page.context().storageState({ path: STORAGE_STATE });
  console.log('Estado da sessão guardado com sucesso. Inciando os testes. ');
});
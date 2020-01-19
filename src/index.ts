/**
 * Vendors
 */
import 'module-alias/register';
import { Page } from 'puppeteer';

/**
 * Utils
 */
import launchBrowser from '@/browser/launchBrowser';
import openPage from '@/browser/openPage';
import fillForm from '@/form/fillForm';

declare var window: {
  grecaptcha: {
    getResponse: () => true;
  };
};

export let page: Page;

/**
 * Run the test
 */
const run = async (): Promise<void> => {
  const browser = await launchBrowser();
  page = await openPage(browser);

  await page.evaluate(() => (window.grecaptcha.getResponse = () => true));

  console.log('filling form');
  await fillForm();
  console.log('form filled');
  // await browser.close();
  console.log('closed');
};

run();

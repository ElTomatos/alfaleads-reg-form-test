/**
 * Vendors
 */
import 'module-alias/register';
import { Page, Browser } from 'puppeteer';

/**
 * Browser
 */
import launchBrowser from '@/browser/launchBrowser';
import openPage from '@/browser/openPage';
export let page: Page;
export let browser: Browser;

/**
 * Utils
 */
import mockRecaptcha from '@/utils/mockRecapthca';
import log from '@/utils/log';

/**
 * Form
 */
import fillForm from '@/form/fillForm';

/**
 * 1 minute for filling the form
 */
jest.setTimeout(60000);

/**
 * Open browser for the test
 */
beforeAll(async () => {
  browser = await launchBrowser();
  page = await openPage(browser);
  await mockRecaptcha();
});

/**
 * Run the test
 */
describe('Registration form', () => {
  test('lead can submit a registration request', async () => {
    log('blue', 'filling form');
    await fillForm();
    log('green', 'form filled');
  });
});

/**
 * Close browser after the test
 */
afterAll(() => {
  browser.close();
});

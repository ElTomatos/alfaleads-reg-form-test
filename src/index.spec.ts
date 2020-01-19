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
import mockRecapthca from '@/utils/mockRecapthca';

/**
 * Form
 */
import fillForm from '@/form/fillForm';

/**
 * Run the test
 */
jest.setTimeout(60000);

beforeAll(async () => {
  browser = await launchBrowser();
  page = await openPage(browser);
  await mockRecapthca();
});

describe('Registration form', () => {
  test('lead can submit a registration request', async () => {
    console.log('filling form');
    await fillForm();
    console.log('form filled');
  });
});

afterAll(() => {
  browser.close();
});

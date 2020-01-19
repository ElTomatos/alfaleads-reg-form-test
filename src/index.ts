/**
 * Vendors
 */
import 'module-alias/register';
import { Page } from 'puppeteer';

/**
 * Browser
 */
import launchBrowser from '@/browser/launchBrowser';
import openPage from '@/browser/openPage';
export let page: Page;

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
const run = async (): Promise<void> => {
  const browser = await launchBrowser();
  page = await openPage(browser);
  await mockRecapthca();

  console.log('filling form');
  await fillForm();
  console.log('form filled');
  // await browser.close();
  console.log('closed');
};

run();

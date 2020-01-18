/**
 * Vendors
 */
import { Page } from 'puppeteer';

/**
 * Config
 */
import { FORM_FIELDS } from '@/config';

/**
 * Fill form with values from config
 * @param {Page} page
 */
const fillForm = async (page: Page): Promise<void> => {
  await page.waitForSelector('step1');
  FORM_FIELDS[0].forEach(async ({ selector, value }) => {
    await page.waitForSelector(selector);
    await page.click(selector);
    await page.type(selector, value);
  });
};

/**
 * Expo
 */
export default fillForm;

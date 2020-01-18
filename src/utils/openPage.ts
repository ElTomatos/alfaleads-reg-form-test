/**
 * Vendors
 */
import { Browser, Page } from 'puppeteer';

/**
 * Config
 */
import { TEST_URL, DIMENSIONS } from '@/config';
const { width, height } = DIMENSIONS;

/**
 * Open registration page from TEST_URL config string
 * @param {Browser} browser
 * @return {Page}
 */
const openPage = async (browser: Browser): Promise<Page> => {
  const page: Page = await browser.newPage();
  await page.setViewport({ width, height });
  await page.goto(TEST_URL);
  return page;
};

/**
 * Expo
 */
export default openPage;

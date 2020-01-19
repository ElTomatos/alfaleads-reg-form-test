/**
 * Page
 */
import { page } from '@/index.spec';
import log from '@/utils/log';

/**
 * Filling select
 * @param {string} selector
 * @param {string} value
 */
const fillSelect = async (selector: string, value: string) => {
  await page.click(selector);
  log('blue', `click ${selector}`);
  await page.waitForSelector(value, { visible: true });
  log('blue', `wait for ${value}`);
  await page.click(value);
  log('green', `selected ${value}`);
};

/**
 * Expo
 */
export default fillSelect;

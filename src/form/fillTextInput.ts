/**
 * Page
 */
import { page } from '@/index.spec';
import log from '@/utils/log';

/**
 *
 * @param {string} selector
 * @param {string} value
 */
const fillTextInput = async (selector: string, value: string) => {
  log('blue', `waiting for ${selector}`);
  await page.waitForSelector(selector, { visible: true });
  await page.click(selector);
  log('blue', `click ${selector}`);
  await page.type(selector, value);
  log('green', `typed ${value}`);
};

/**
 * Expo
 */
export default fillTextInput;

/**
 * Page
 */
import { page } from '@/index.spec';

/**
 *
 * @param {string} selector
 * @param {string} value
 */
const fillTextInput = async (selector: string, value: string) => {
  console.log(`waiting for ${selector}`);
  await page.waitForSelector(selector, { visible: true });
  await page.click(selector);
  console.log(`click ${selector}`);
  await page.type(selector, value);
  console.log(`type ${value}`);
};

/**
 * Expo
 */
export default fillTextInput;

/**
 * Page
 */
import { page } from '@/index';

/**
 * Filling select
 * @param {string} selector
 * @param {string} value
 */
const fillSelect = async (selector: string, value: string) => {
  await page.click(selector);
  console.log(`click ${selector}`);
  await page.waitForSelector(value, { visible: true });
  console.log(`wait for ${value}`);
  await page.click(value);
  console.log(`selected ${value}`);
};

/**
 * Expo
 */
export default fillSelect;

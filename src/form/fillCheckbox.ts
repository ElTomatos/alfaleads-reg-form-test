/**
 * Page
 */
import { page } from '@/index';

/**
 * Checking checkbox type input
 * @param {string} selector
 */
const fillCheckbox = async (selector: string) => {
  await page.click(selector);
  console.log(`checked ${selector}`);
};

/**
 * Expo
 */
export default fillCheckbox;

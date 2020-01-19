/**
 * Page
 */
import { page } from '@/index.spec';
import log from '@/utils/log';

/**
 * Checking checkbox type input
 * @param {string} selector
 */
const fillCheckbox = async (selector: string) => {
  await page.click(selector);
  log('green', `checked ${selector}`);
};

/**
 * Expo
 */
export default fillCheckbox;

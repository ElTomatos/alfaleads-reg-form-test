import { page } from '@/index.spec';
import log from '@/utils/log';

/**
 * Fill selectized input
 * @param {string} selector
 * @param {string} value
 * @param {string} wrapper
 */
const fillSelectized = async (
  selector: string,
  value: string,
  wrapper: string
) => {
  await page.click(selector);
  log('blue', `click ${selector}`);
  await page.type(selector, value);
  log('blue', `type ${value}`);
  await page.waitForSelector(`${wrapper} .selectize-dropdown`, {
    visible: true,
  });
  log('blue', `wait for selectize-dropdown`);
  await page.click(`${wrapper} .selectize-dropdown`);
  log('green', `selectized`);
};

/**
 * Expo
 */
export default fillSelectized;

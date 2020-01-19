import { page } from '@/index.spec';

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
  console.log(`click ${selector}`);
  await page.type(selector, value);
  console.log(`type ${value}`);
  await page.waitForSelector(`${wrapper} .selectize-dropdown`, {
    visible: true,
  });
  console.log(`wait for selectize-dropdown`);
  await page.click(`${wrapper} .selectize-dropdown`);
  console.log(`selectized`);
};

/**
 * Expo
 */
export default fillSelectized;

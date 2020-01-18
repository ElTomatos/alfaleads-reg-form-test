/**
 * Page
 */
import { page } from '@/index';

/**
 * Utils
 */
import sleep from '@/utils/sleep';

/**
 * Typings
 */
import { IFormInput } from '@/@types/form';
/**
 * Filling input field
 * @param selector
 * @param value
 * @return Promise
 */
const fillInput = async ({
  selector,
  value,
  type,
  wrapper,
}: IFormInput): Promise<any> => {
  try {
    if (type === 'select') {
      await page.click(selector);
      console.log(`click ${selector}`);
      await page.waitForSelector(value, { visible: true });
      console.log(`wait for ${value}`);
      await page.click(value);
      console.log(`selected ${value}`);
    } else if (type === 'selectized') {
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
    } else if (type === 'checkbox') {
      await page.click(selector);
      console.log(`checked ${selector}`);
    } else {
      console.log(`waiting for ${selector}`);
      await page.waitForSelector(selector, { visible: true });
      await page.click(selector);
      console.log(`click ${selector}`);
      await page.type(selector, value);
      console.log(`type ${value}`);
    }
  } catch (e) {
    console.log(e);
    console.log(`error on filling ${selector}`);
    throw new Error(`error on filling ${selector}`);
  }
};

export default fillInput;

/**
 * Page
 */
import { page } from '@/index';

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
const fillInput = async ({ selector, value }: IFormInput): Promise<any> => {
  try {
    await page.click(selector);
    console.log(`click ${selector}`);
    await page.type(selector, value);
    console.log(`type ${value}`);
  } catch (e) {
    console.error(e);
  }
};

export default fillInput;

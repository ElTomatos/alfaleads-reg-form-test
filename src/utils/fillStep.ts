/**
 * Page
 */
import { page } from '@/index';

/**
 * Config
 */
import { FORM_FIELDS, NEXT_BTN_SELECTOR } from '@/config';

/**
 * Utils
 */
import fillInput from '@/utils/fillInput';
import sleep from '@/utils/sleep';

/**
 *
 * @param {number} step
 */
const fillStep = async (step: number): Promise<void> => {
  console.log('sleeping');
  await sleep(2000);
  console.log(`waiting for step ${step}`);
  await page.waitForSelector(`.step${step}`, { visible: true });

  for await (const field of FORM_FIELDS[step - 1]) {
    console.log('filling inputs');
    await fillInput(field);
  }

  console.log('go next');
  await page.click(`.next${step}__btn`);
};

/**
 * Expo
 */
export default fillStep;

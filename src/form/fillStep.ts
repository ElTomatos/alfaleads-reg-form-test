/**
 * Page
 */
import { page } from '@/index.spec';

/**
 * Config
 */
import { FORM_FIELDS } from '@/config/config';

/**
 * Utils
 */
import fillInput from '@/form/fillInput';
import sleep from '@/utils/sleep';
import log from '@/utils/log';

/**
 *
 * @param {number} step
 */
const fillStep = async (step: number): Promise<void> => {
  log('blue', 'sleeping...');
  await sleep(2000);
  log('blue', `waiting for step ${step}`);
  await page.waitForSelector(`.step${step}`, { visible: true });

  for await (const field of FORM_FIELDS[step - 1]) {
    log('blue', 'filling inputs');
    await fillInput(field);
  }

  log('green', 'go next step');
  await page.click(`.next${step}__btn`);
};

/**
 * Expo
 */
export default fillStep;

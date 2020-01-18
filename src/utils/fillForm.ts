/**
 * Vendor
 */
import async from 'async';

/**
 * Config
 */
import { FORM_FIELDS } from '@/config';

/**
 * Utils
 */
import fillInput from '@/utils/fillInput';

/**
 * Page
 */
import { page } from '@/index';

/**
 * Fill form with values from config
 */
const fillForm = async (): Promise<void> => {
  console.log('waiting for step-1');
  await page.waitForSelector('.step1');

  console.log('filling inputs');
  for await (const field of FORM_FIELDS[0]) {
    await fillInput(field);
  }
  console.log('inputs filled');
};

/**
 * Expo
 */
export default fillForm;

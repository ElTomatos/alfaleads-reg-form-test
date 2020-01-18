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
import fillStep from '@/utils/fillStep';

/**
 * Page
 */
import { page } from '@/index';

/**
 * Fill form with values from config
 */
const fillForm = async (): Promise<void> => {
  for await (const step of FORM_FIELDS.keys()) {
    await fillStep(step + 1);
  }
};

/**
 * Expo
 */
export default fillForm;

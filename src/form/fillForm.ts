/**
 * Config
 */
import { FORM_FIELDS } from '@/config/config';

/**
 * Utils
 */
import fillStep from '@/form/fillStep';

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

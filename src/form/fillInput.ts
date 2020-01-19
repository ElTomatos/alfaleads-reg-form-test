/**
 * Typings
 */
import { IFormInput } from '@/@types/form';

/**
 * Inputs
 */
import fillTextInput from '@/form/fillTextInput';
import fillSelect from '@/form/fillSelect';
import fillSelectized from '@/form/fillSelectized';
import fillCheckbox from '@/form/fillCheckbox';

/**
 * Config
 */
import { INPUT_TYPE } from '@/config/config';
import log from '@/utils/log';

/**
 * Filling input field
 * @param {string} selector
 * @param {string} value
 * @param {string} type
 * @param {string} wrapper
 * @return {Promise}
 */
const fillInput = async ({
  selector,
  value,
  type,
  wrapper,
}: IFormInput): Promise<void> => {
  try {
    switch (type) {
      case INPUT_TYPE.SELECT:
        await fillSelect(selector, value);
        break;
      case INPUT_TYPE.SELECTIZED:
        await fillSelectized(selector, value, wrapper);
        break;
      case INPUT_TYPE.CHECKBOX:
        await fillCheckbox(selector);
        break;
      default:
        await fillTextInput(selector, value);
        break;
    }
  } catch (e) {
    log('red', e);
    log('red', `error on filling ${selector}`);
    throw new Error(`error on filling ${selector}`);
  }
};

/**
 * Expo
 */
export default fillInput;

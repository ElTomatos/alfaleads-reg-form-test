/**
 * Page
 */
import { page } from '@/index';

/**
 * Typings
 */
declare var window: {
  grecaptcha: {
    getResponse: () => true;
  };
};

/**
 * Mocking recapthca response to always have true
 */
const mockRecapthca = async () => {
  await page.evaluate(() => (window.grecaptcha.getResponse = () => true));
};

export default mockRecapthca;

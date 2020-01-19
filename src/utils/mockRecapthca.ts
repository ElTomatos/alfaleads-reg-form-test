/**
 * Page
 */
import { page } from '@/index.spec';

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
const mockRecaptcha = async () => {
  await page.evaluate(() => (window.grecaptcha.getResponse = () => true));
};

export default mockRecaptcha;

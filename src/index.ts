/**
 * Vendors
 */
import 'module-alias/register';

/**
 * Utils
 */
import launchBrowser from '@/utils/launchBrowser';
import openPage from '@/utils/openPage';
import fillForm from '@/utils/fillForm';

declare var window: {
  grecaptcha: () => any;
};

/**
 * Run the test
 */
const run = async (): Promise<void> => {
  const browser = await launchBrowser();
  const page = await openPage(browser);
  await page.evaluate(() => (window.grecaptcha = () => true));
  await fillForm(page);

  await browser.close();
};

run();

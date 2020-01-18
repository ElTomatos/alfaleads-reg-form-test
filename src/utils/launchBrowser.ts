/**
 * Vendors
 */
import puppeteer, { Browser } from 'puppeteer';

/**
 * Config
 */
import { DIMENSIONS } from '@/config';

/**
 * Launches the browser
 * @return {Browser}
 */
const launchBrowser = async (): Promise<Browser> => {
  const browser: Browser = await puppeteer.launch({
    slowMo: 40,
    headless: false,
    args: [`--window-size=${DIMENSIONS.width},${DIMENSIONS.height}`],
  });

  return browser;
};

/**
 * Expo
 */
export default launchBrowser;

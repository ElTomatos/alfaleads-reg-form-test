/**
 * Vendors
 */
import puppeteer, { Browser } from 'puppeteer';

/**
 * Config
 */
import getBrowserConfig from '@/utils/getBrowserConfig';

/**
 * Launches the browser
 * @return {Browser}
 */
const launchBrowser = async (): Promise<Browser> => {
  const browser: Browser = await puppeteer.launch(getBrowserConfig());
  return browser;
};

/**
 * Expo
 */
export default launchBrowser;

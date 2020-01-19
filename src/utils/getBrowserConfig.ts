/**
 * Config
 */
import { DIMENSIONS } from '@/config/config';

/**
 * Typings
 */
import { IBrowser } from '@/@types/browser';

/**
 * @return {IBrowser} config
 */
const getBrowserConfig = (): IBrowser => {
  const config: IBrowser = {
    slowMo: 40,
    headless: process.env.NODE_ENV === 'debug',
    args: [`--window-size=${DIMENSIONS.width},${DIMENSIONS.height}`],
  };

  return config;
};

/**
 * Expo
 */
export default getBrowserConfig;

/**
 * Vendors
 */
import chalk, { Chalk } from 'chalk';

/**
 * Logging something
 * @param {string} color
 * @param {string} message
 */
const log = (color: keyof Chalk, message: string): void => {
  console.log((chalk[color] as Chalk)(message));
};

/**
 Expo
 */
export default log;

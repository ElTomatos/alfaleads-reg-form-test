/**
 * Suspend execution
 * @param {number} ms
 */
const sleep = (ms: number): Promise<void> =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

/**
 * Expo
 */
export default sleep;

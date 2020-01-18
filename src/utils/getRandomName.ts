/**
 * Get test name with random suffix
 * @return {string}
 */
const getRandomName = (): string => {
  const suffix: number = Math.floor(Math.random() * 1000);
  return `test${suffix}`;
};

/**
 * Expo
 */
export default getRandomName;

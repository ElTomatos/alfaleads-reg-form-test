'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * Get test name with random suffix
 * @return {string}
 */
const getRandomName = () => {
  const suffix = Math.floor(Math.random() * 1000);
  return `test${suffix}`;
};
/**
 * Expo
 */
exports.default = getRandomName;
//# sourceMappingURL=getRandomName.js.map

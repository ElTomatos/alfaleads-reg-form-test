'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * Vendors
 */
const chalk_1 = __importDefault(require('chalk'));
/**
 * Logging something
 * @param {string} color
 * @param {string} message
 */
const log = (color, message) => {
  console.log(chalk_1.default[color](message));
};
/**
 Expo
 */
exports.default = log;
//# sourceMappingURL=log.js.map

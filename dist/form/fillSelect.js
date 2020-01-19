'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function(resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * Page
 */
const index_spec_1 = require('@/index.spec');
const log_1 = __importDefault(require('@/utils/log'));
/**
 * Filling select
 * @param {string} selector
 * @param {string} value
 */
const fillSelect = (selector, value) =>
  __awaiter(void 0, void 0, void 0, function*() {
    yield index_spec_1.page.click(selector);
    log_1.default('blue', `click ${selector}`);
    yield index_spec_1.page.waitForSelector(value, { visible: true });
    log_1.default('blue', `wait for ${value}`);
    yield index_spec_1.page.click(value);
    log_1.default('green', `selected ${value}`);
  });
/**
 * Expo
 */
exports.default = fillSelect;
//# sourceMappingURL=fillSelect.js.map

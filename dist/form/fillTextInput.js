"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Page
 */
const index_spec_1 = require("@/index.spec");
const log_1 = __importDefault(require("@/utils/log"));
/**
 *
 * @param {string} selector
 * @param {string} value
 */
const fillTextInput = (selector, value) => __awaiter(void 0, void 0, void 0, function* () {
    log_1.default('blue', `waiting for ${selector}`);
    yield index_spec_1.page.waitForSelector(selector, { visible: true });
    yield index_spec_1.page.click(selector);
    log_1.default('blue', `click ${selector}`);
    yield index_spec_1.page.type(selector, value);
    log_1.default('green', `typed ${value}`);
});
/**
 * Expo
 */
exports.default = fillTextInput;
//# sourceMappingURL=fillTextInput.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
const index_spec_1 = require("@/index.spec");
/**
 * Fill selectized input
 * @param {string} selector
 * @param {string} value
 * @param {string} wrapper
 */
const fillSelectized = (selector, value, wrapper) => __awaiter(void 0, void 0, void 0, function* () {
    yield index_spec_1.page.click(selector);
    console.log(`click ${selector}`);
    yield index_spec_1.page.type(selector, value);
    console.log(`type ${value}`);
    yield index_spec_1.page.waitForSelector(`${wrapper} .selectize-dropdown`, {
        visible: true,
    });
    console.log(`wait for selectize-dropdown`);
    yield index_spec_1.page.click(`${wrapper} .selectize-dropdown`);
    console.log(`selectized`);
});
/**
 * Expo
 */
exports.default = fillSelectized;
//# sourceMappingURL=fillSelectized.js.map
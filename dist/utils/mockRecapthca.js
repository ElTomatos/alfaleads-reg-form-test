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
/**
 * Page
 */
const index_spec_1 = require("@/index.spec");
/**
 * Mocking recapthca response to always have true
 */
const mockRecapthca = () => __awaiter(void 0, void 0, void 0, function* () {
    yield index_spec_1.page.evaluate(() => (window.grecaptcha.getResponse = () => true));
});
exports.default = mockRecapthca;
//# sourceMappingURL=mockRecapthca.js.map
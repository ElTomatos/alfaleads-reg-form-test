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
 * Config
 */
const config_1 = require("@/config/config");
const { width, height } = config_1.DIMENSIONS;
/**
 * Open registration page from TEST_URL config string
 * @param {Browser} browser
 * @return {Page}
 */
const openPage = (browser) => __awaiter(void 0, void 0, void 0, function* () {
    const page = yield browser.newPage();
    yield page.setViewport({ width, height });
    yield page.goto(config_1.TEST_URL);
    return page;
});
/**
 * Expo
 */
exports.default = openPage;
//# sourceMappingURL=openPage.js.map
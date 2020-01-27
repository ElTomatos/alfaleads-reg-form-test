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
 * Vendors
 */
require("module-alias/register");
/**
 * Browser
 */
const launchBrowser_1 = __importDefault(require("@/browser/launchBrowser"));
const openPage_1 = __importDefault(require("@/browser/openPage"));
/**
 * Utils
 */
const mockRecapthca_1 = __importDefault(require("@/utils/mockRecapthca"));
const log_1 = __importDefault(require("@/utils/log"));
const waitForResponse_1 = __importDefault(require("@/utils/waitForResponse"));
/**
 * Form
 */
const fillForm_1 = __importDefault(require("@/form/fillForm"));
/**
 * 1 minute for filling the form
 */
jest.setTimeout(60000);
/**
 * Open browser for the test
 */
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    exports.browser = yield launchBrowser_1.default();
    exports.page = yield openPage_1.default(exports.browser);
    yield mockRecapthca_1.default();
}));
/**
 * Run the test
 */
describe('Registration form', () => {
    test('lead can submit a registration request', () => __awaiter(void 0, void 0, void 0, function* () {
        log_1.default('blue', 'filling form');
        yield fillForm_1.default();
        log_1.default('green', 'form filled');
        const res = yield waitForResponse_1.default(exports.page, "/register");
        console.log(res);
    }));
});
/**
 * Close browser after the test
 */
afterAll(() => {
    exports.browser.close();
});
//# sourceMappingURL=index.spec.js.map
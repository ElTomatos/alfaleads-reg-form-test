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
/**
 * Form
 */
const fillForm_1 = __importDefault(require("@/form/fillForm"));
/**
 * Run the test
 */
jest.setTimeout(60000);
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    exports.browser = yield launchBrowser_1.default();
    exports.page = yield openPage_1.default(exports.browser);
    yield mockRecapthca_1.default();
}));
describe('Registration form', () => {
    test('lead can submit a registration request', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log('filling form');
        yield fillForm_1.default();
        console.log('form filled');
    }));
});
afterAll(() => {
    exports.browser.close();
});
//# sourceMappingURL=index.spec.js.map
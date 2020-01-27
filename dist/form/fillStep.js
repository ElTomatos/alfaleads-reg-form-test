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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Page
 */
const index_spec_1 = require("@/index.spec");
/**
 * Config
 */
const config_1 = require("@/config/config");
/**
 * Utils
 */
const fillInput_1 = __importDefault(require("@/form/fillInput"));
const sleep_1 = __importDefault(require("@/utils/sleep"));
const log_1 = __importDefault(require("@/utils/log"));
/**
 *
 * @param {number} step
 */
const fillStep = (step) => __awaiter(void 0, void 0, void 0, function* () {
    var e_1, _a;
    log_1.default('blue', 'sleeping...');
    yield sleep_1.default(2000);
    log_1.default('blue', `waiting for step ${step}`);
    yield index_spec_1.page.waitForSelector(`.step${step}`, { visible: true });
    try {
        for (var _b = __asyncValues(config_1.FORM_FIELDS[step - 1]), _c; _c = yield _b.next(), !_c.done;) {
            const field = _c.value;
            log_1.default('blue', 'filling inputs');
            yield fillInput_1.default(field);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    log_1.default('green', 'go next step');
    yield index_spec_1.page.click(`.next${step}__btn`);
});
/**
 * Expo
 */
exports.default = fillStep;
//# sourceMappingURL=fillStep.js.map
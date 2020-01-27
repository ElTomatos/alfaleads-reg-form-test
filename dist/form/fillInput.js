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
 * Inputs
 */
const fillTextInput_1 = __importDefault(require("@/form/fillTextInput"));
const fillSelect_1 = __importDefault(require("@/form/fillSelect"));
const fillSelectized_1 = __importDefault(require("@/form/fillSelectized"));
const fillCheckbox_1 = __importDefault(require("@/form/fillCheckbox"));
/**
 * Config
 */
const config_1 = require("@/config/config");
const log_1 = __importDefault(require("@/utils/log"));
/**
 * Filling input field
 * @param {string} selector
 * @param {string} value
 * @param {string} type
 * @param {string} wrapper
 * @return {Promise}
 */
const fillInput = ({ selector, value, type, wrapper, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        switch (type) {
            case config_1.INPUT_TYPE.SELECT:
                yield fillSelect_1.default(selector, value);
                break;
            case config_1.INPUT_TYPE.SELECTIZED:
                yield fillSelectized_1.default(selector, value, wrapper);
                break;
            case config_1.INPUT_TYPE.CHECKBOX:
                yield fillCheckbox_1.default(selector);
                break;
            default:
                yield fillTextInput_1.default(selector, value);
                break;
        }
    }
    catch (e) {
        log_1.default('red', e);
        log_1.default('red', `error on filling ${selector}`);
        throw new Error(`error on filling ${selector}`);
    }
});
/**
 * Expo
 */
exports.default = fillInput;
//# sourceMappingURL=fillInput.js.map
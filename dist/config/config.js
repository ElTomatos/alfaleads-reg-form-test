"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Helpers
 */
const getRandomName_1 = __importDefault(require("@/utils/getRandomName"));
/**
 * Registration form URL
 */
exports.TEST_URL = 'https://alfaleads.net/registration.html';
/**
 * Browser window dimensions
 */
exports.DIMENSIONS = {
    width: 1920,
    height: 1280,
};
/**
 * Input types constants
 */
var INPUT_TYPE;
(function (INPUT_TYPE) {
    INPUT_TYPE["SELECT"] = "select";
    INPUT_TYPE["SELECTIZED"] = "selectized";
    INPUT_TYPE["CHECKBOX"] = "checkbox";
})(INPUT_TYPE = exports.INPUT_TYPE || (exports.INPUT_TYPE = {}));
/**
 * Registration form fields
 */
const name = getRandomName_1.default();
exports.FORM_FIELDS = [
    [
        {
            selector: '#first-name',
            value: name,
        },
        {
            selector: '#last-name',
            value: 'test',
        },
        {
            selector: '#mail',
            value: `${name}@test.com`,
        },
        {
            selector: '#pass1',
            value: 'test1337',
        },
        {
            selector: '#pass2',
            value: 'test1337',
        },
        {
            selector: '#about',
            value: 'test',
        },
    ],
    [
        {
            selector: '#country',
            value: 'test',
        },
        {
            selector: '#city',
            value: 'test',
        },
        {
            selector: '[data-select2-id="1"]',
            value: '.select2-results__option:first-child',
            type: INPUT_TYPE.SELECT,
        },
        {
            selector: '#username',
            value: 'test',
        },
        {
            selector: '#experience',
            value: 'test',
        },
    ],
    [
        {
            selector: '[data-select2-id="5"]',
            value: '.select2-results__option:first-child',
            type: 'select',
        },
        {
            selector: '#networks-selectized',
            value: 'test',
            type: INPUT_TYPE.SELECTIZED,
            wrapper: '.networks--wrapper',
        },
        {
            selector: '#traffic-selectized',
            value: 'test',
            type: INPUT_TYPE.SELECTIZED,
            wrapper: '.traffic--wrapper',
        },
        {
            selector: '[data-select2-id="7"]',
            value: '#select2-select-verticies-results .select2-results__option:first-child',
            type: INPUT_TYPE.SELECT,
        },
        {
            selector: '[data-select2-id="8"]',
            value: '#select2-select-country-results .select2-results__option:first-child',
            type: INPUT_TYPE.SELECT,
        },
        {
            selector: '[data-select2-id="9"]',
            value: '#select2-monthly-revenue-results .select2-results__option:first-child',
            type: INPUT_TYPE.SELECT,
        },
    ],
];
//# sourceMappingURL=config.js.map
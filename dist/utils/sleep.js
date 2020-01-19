"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Suspend execution
 * @param {number} ms
 */
const sleep = (ms) => new Promise(resolve => {
    setTimeout(resolve, ms);
});
/**
 * Expo
 */
exports.default = sleep;
//# sourceMappingURL=sleep.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Expo
 * @param {Page} page
 * @param {String} url
 */
const waitForResponse = (page, url) => {
    return new Promise(resolve => {
        page.on("response", function callback(response) {
            console.log(response.url());
            if (response.url().endsWith(url)) {
                resolve(response);
                page.removeListener("response", callback);
            }
        });
    });
};
exports.default = waitForResponse;
//# sourceMappingURL=waitForResponse.js.map
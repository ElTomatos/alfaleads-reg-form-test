/**
 * Typings
 */
import { Page } from "puppeteer";

/**
 * Expo
 * @param {Page} page
 * @param {String} url
 */
const waitForResponse = (page: Page, url: string): Promise<any> => {
    return new Promise(resolve => {
        page.on("response", function callback(response){
            if (response.url().endsWith(url)) {
                resolve(response);
                page.removeListener("response",callback)
            }
        })
    })
};

export default waitForResponse;
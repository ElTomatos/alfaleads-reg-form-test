"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Config
 */
const config_1 = require("@/config/config");
/**
 * @return {IBrowser} config
 */
const getBrowserConfig = () => {
    const config = {
        slowMo: 40,
        headless: process.env.NODE_ENV !== 'debug',
        args: [`--window-size=${config_1.DIMENSIONS.width},${config_1.DIMENSIONS.height}`],
    };
    return config;
};
/**
 * Expo
 */
exports.default = getBrowserConfig;
//# sourceMappingURL=getBrowserConfig.js.map
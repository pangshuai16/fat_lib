"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const axios_retry_1 = __importDefault(require("axios-retry"));
const request = axios_1.default.create({
    timeout: 30 * 1000,
});
(0, axios_retry_1.default)(request, {
    retries: 5,
    retryDelay: (retryCount) => {
        return retryCount * 1500;
    },
    shouldResetTimeout: true,
    retryCondition: () => {
        return true;
    }
});
exports.default = request;

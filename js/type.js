"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArguments = exports.isError = exports.isRegExp = exports.isDate = exports.isFunction = exports.isArray = exports.isObject = exports.isString = exports.isNumber = exports.isBoolean = exports.isNull = exports.isUndefined = exports.type = void 0;
function type(obj) {
    return typeof obj !== "object"
        ? typeof obj
        : Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}
exports.type = type;
function isUndefined(obj) {
    return obj === void 0;
}
exports.isUndefined = isUndefined;
function isNull(obj) {
    return obj === null;
}
exports.isNull = isNull;
function isBoolean(obj) {
    return typeof obj === "boolean";
}
exports.isBoolean = isBoolean;
function isNumber(obj) {
    return typeof obj === "number";
}
exports.isNumber = isNumber;
function isString(obj) {
    return typeof obj === "string";
}
exports.isString = isString;
function isObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
}
exports.isObject = isObject;
function isArray(obj) {
    return Array.isArray
        ? Array.isArray(obj)
        : Object.prototype.toString.call(obj) === "[object Array]";
}
exports.isArray = isArray;
function isFunction(obj) {
    return typeof obj === "function";
}
exports.isFunction = isFunction;
function isDate(obj) {
    return Object.prototype.toString.call(obj) === "[object Date]";
}
exports.isDate = isDate;
function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === "[object RegExp]";
}
exports.isRegExp = isRegExp;
function isError(obj) {
    return Object.prototype.toString.call(obj) === "[object Error]";
}
exports.isError = isError;
function isArguments(obj) {
    return Object.prototype.toString.call(obj) === "[object Arguments]";
}
exports.isArguments = isArguments;

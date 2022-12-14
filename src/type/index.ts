import TypeReal from './typeReal'

const type = {
    typeReal: TypeReal
}

export const {
    typeReal
} = type

export default type

/**
 * @desc 是否是 Undefined 类型检测
 * @param obj 待检测的数据
 * @return {Boolean} 布尔值
 */
export function isUndefined(obj: any): boolean {
    return obj === void 0;
}

/**
 * @desc 是否是 Null 类型检测
 * @param obj 待检测的数据
 * @return {Boolean} 布尔值
 */
export function isNull(obj: any): boolean {
    return obj === null;
}

/**
 * @desc 是否是 Boolean 类型检测
 * @param obj 待检测的数据
 * @return {Boolean} 布尔值
 */
export function isBoolean(obj: any): boolean {
    return typeof obj === "boolean";
}

/**
 * @desc 是否是 Number 类型检测
 * @param obj 待检测的数据
 * @return {Boolean} 布尔值
 */
export function isNumber(obj: any): boolean {
    return typeof obj === "number";
}

/**
 * @desc 是否是 String 类型检测
 * @param obj 待检测的数据
 * @return {Boolean} 布尔值
 */
export function isString(obj: any): boolean {
    return typeof obj === "string";
}

/**
 * @desc 是否是 Object 类型检测
 * @param obj 待检测的数据
 * @return {Boolean} 布尔值
 */
export function isObject(obj: any): boolean {
    return Object.prototype.toString.call(obj) === "[object Object]";
}

/**
 * @desc 是否是 Array 类型检测
 * @param obj 待检测的数据
 * @return {Boolean} 布尔值
 */
export function isArray(obj: any): boolean {
    return Array.isArray
        ? Array.isArray(obj)
        : Object.prototype.toString.call(obj) === "[object Array]";
}

/**
 * @desc 是否是 Function 类型检测
 * @param obj 待检测的数据
 * @return {Boolean} 布尔值
 */
export function isFunction(obj: any): boolean {
    return typeof obj === "function";
}

/**
 * @desc 是否是 Date 类型检测
 * @param obj 待检测的数据
 * @return {Boolean} 布尔值
 */
export function isDate(obj: any): boolean {
    return Object.prototype.toString.call(obj) === "[object Date]";
}

/**
 * @desc 是否是 RegExp 类型检测
 * @param obj 待检测的数据
 * @return {Boolean} 布尔值
 */
export function isRegExp(obj: any): boolean {
    return Object.prototype.toString.call(obj) === "[object RegExp]";
}

/**
 * @desc 是否是 Error 类型检测
 * @param obj 待检测的数据
 * @return {Boolean} 布尔值
 */
export function isError(obj: any): boolean {
    return Object.prototype.toString.call(obj) === "[object Error]";
}

/**
 * @desc 是否是 Arguments 类型检测
 * @param obj 待检测的数据
 * @return {Boolean} 布尔值
 */
export function isArguments(obj: any): boolean {
    return Object.prototype.toString.call(obj) === "[object Arguments]";
}

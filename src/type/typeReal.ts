/**
 * @desc 数据类型检测
 * @param obj 待检测的数据
 * @return {String} 类型字符串
 */
export default function typeReal(obj: any): string {
    return typeof obj !== "object"
        ? typeof obj
        : Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

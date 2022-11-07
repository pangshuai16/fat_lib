import {replaceMany} from "../string";

/**
 * 指定年月日的显示格式, 根据y、m、d的数量控制字符长度
 * @param date 需要 年-y，月-m，日-d
 * @param {string} formatter 转换后的格式，默认'yyyy-mm-dd'
 */
export default function formatDate(
    date: Date | string = new Date(),
    formatter: string = "yyyy-mm-dd"
) {
    // 转换为Date格式
    const target = new Date(date);

    // 获取时间
    const year = target.getFullYear();
    const month = target.getMonth() + 1;
    const day = target.getDate();
    const yearLen = (formatter.match(/y/g) || [0]).length;
    const monthLen = (formatter.match(/m/g) || [0]).length;
    const dayLen = (formatter.match(/d/g) || [0]).length;

    const newYear = (year / Math.pow(10, yearLen)).toString().split(".")[1];
    const newMonth =
        month.toString().length < monthLen ? "0" + month : month.toString();
    const newDay = day.toString().length < dayLen ? "0" + day : day.toString();

    return replaceMany(formatter, [
        [/y+/, newYear],
        [/m+/, newMonth],
        [/d+/, newDay],
    ]);
};

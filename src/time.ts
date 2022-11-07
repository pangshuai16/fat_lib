import {replaceMany} from "./string";

/**
 * 指定年月日的显示格式, 根据y、m、d的数量控制字符长度
 * @param date 需要 年-y，月-m，日-d
 * @param {string} formatter 转换后的格式，默认'yyyy-mm-dd'
 */
export const formatDate = (
    date: Date | string = new Date(),
    formatter: string = "yyyy-mm-dd"
) => {
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

/**
 * 判断指定日期是否为工作日
 * @param {string | Date} date 需查询的日期，默认为当日
 * @param {Array} officialHoliday 法定节假日
 * @param {Array} dayOff 调休日
 */
export function isWorkday(
    date: string | Date = new Date(),
    officialHoliday: Array<string|Date>= [],
    dayOff: Array<string|Date>= []
) {
    const target = new Date(date);
    const day = target.getDay();
    const dateString = target.toLocaleDateString();
    const isHoliday = officialHoliday.includes(dateString);
    const isDayOff = dayOff.includes(dateString);

    if (officialHoliday.length>0 && isHoliday) {
        return false;  // 法定节假日
    } else if (dayOff.length>0 && isDayOff) {
        return true;  // 节假日调休
    } else return !(day === 0 || day === 6); // 工作日
}

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
 * @param {boolean} officialHoliday 是否将节假日判断为休息日,默认：true
 * @param {boolean} daysOff 是否将调休判定为工作日，默认：false
 */
export function isWorkday(
    date: string | Date = new Date(),
    officialHoliday: boolean = true,
    daysOff: boolean = false
) {
    const holidays = [
        "2022/9/10", //中秋
        "2022/9/11", //中秋
        "2022/9/12", //中秋
        "2022/10/1", //国庆
        "2022/10/2", //国庆
        "2022/10/3", //国庆
        "2022/10/4", //国庆
        "2022/10/5", //国庆
        "2022/10/6", //国庆
        "2022/10/7", //国庆
    ];
    const dayOff = [
        "2022/10/8", // 国庆调休
        "2022/10/9", // 国庆调休
    ];

    const target = new Date(date);
    const day = target.getDay(); // 星期几 0-6
    const dateString = target.toLocaleDateString();
    const isHoliday = holidays.includes(dateString);
    const isDayOff = dayOff.includes(dateString);

    if (officialHoliday && isHoliday) {
        return false;  // 法定节假日
    } else if (daysOff && isDayOff) {
        return true;  // 节假日调休
    } else return !(day === 0 || day === 6); // 工作日
}
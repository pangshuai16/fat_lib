"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWorkday = exports.formatDate = void 0;
const string_1 = require("./string");
const formatDate = (date = new Date(), formatter = "yyyy-mm-dd") => {
    const target = new Date(date);
    const year = target.getFullYear();
    const month = target.getMonth() + 1;
    const day = target.getDate();
    const yearLen = (formatter.match(/y/g) || [0]).length;
    const monthLen = (formatter.match(/m/g) || [0]).length;
    const dayLen = (formatter.match(/d/g) || [0]).length;
    const newYear = (year / Math.pow(10, yearLen)).toString().split(".")[1];
    const newMonth = month.toString().length < monthLen ? "0" + month : month.toString();
    const newDay = day.toString().length < dayLen ? "0" + day : day.toString();
    return (0, string_1.replaceMany)(formatter, [
        [/y+/, newYear],
        [/m+/, newMonth],
        [/d+/, newDay],
    ]);
};
exports.formatDate = formatDate;
function isWorkday(date = new Date(), officialHoliday = true, daysOff = false) {
    const holidays = [
        "2022/9/10",
        "2022/9/11",
        "2022/9/12",
        "2022/10/1",
        "2022/10/2",
        "2022/10/3",
        "2022/10/4",
        "2022/10/5",
        "2022/10/6",
        "2022/10/7",
    ];
    const dayOff = [
        "2022/10/8",
        "2022/10/9",
    ];
    const target = new Date(date);
    const day = target.getDay();
    const dateString = target.toLocaleDateString();
    const isHoliday = holidays.includes(dateString);
    const isDayOff = dayOff.includes(dateString);
    if (officialHoliday && isHoliday) {
        return false;
    }
    else if (daysOff && isDayOff) {
        return true;
    }
    else
        return !(day === 0 || day === 6);
}
exports.isWorkday = isWorkday;

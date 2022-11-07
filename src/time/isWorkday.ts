/**
 * 判断指定日期是否为工作日
 * @param {string | Date} date 需查询的日期，默认为当日
 * @param {Array} officialHoliday 法定节假日
 * @param {Array} dayOff 调休日
 */
export default function isWorkday(
    date: string | Date = new Date(),
    officialHoliday: Array<string | Date> = [],
    dayOff: Array<string | Date> = []
) {
    const target = new Date(date);
    const day = target.getDay();
    const dateString = target.toLocaleDateString();
    const isHoliday = officialHoliday.includes(dateString);
    const isDayOff = dayOff.includes(dateString);

    if (officialHoliday.length > 0 && isHoliday) {
        return false;  // 法定节假日
    } else if (dayOff.length > 0 && isDayOff) {
        return true;  // 节假日调休
    } else return !(day === 0 || day === 6); // 工作日
}

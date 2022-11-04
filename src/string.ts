/**
 * 批量替换字符串
 * @param { string } word 原字符串
 * @param regList 替换规则列表，二维数组，每个数组的第一项为原字符，第二项为替换后的字符
 */
export const replaceMany = (
    word: string,
    regList: [string | RegExp, string][]
) => {
    let str = word;
    for (const item of regList) {
        str = str.replace(item[0], item[1]);
    }
    return str;
};
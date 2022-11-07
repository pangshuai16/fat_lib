/**
 * 批量替换字符串
 * @param { string } word 原字符串
 * @param regList 替换规则列表，二维数组，每个数组的第一项为原字符，第二项为替换后的字符
 */
export default function replaceMany(
    word: string,
    regList: [string | RegExp, string][]
) {
    for (const item of regList) {
        word = word.replace(item[0], item[1]);
    }
    return word;
};

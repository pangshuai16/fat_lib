import avg from "./avg";
/**
 * 计算数组的方差
 */
export default function variance(data: number[]) {
    const avgValue = avg(data)
    return data.reduce((pre, now) => {
        return Math.pow(now - avgValue, 2) + pre
    }) / data.length
}

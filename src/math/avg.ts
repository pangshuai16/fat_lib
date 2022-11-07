import sum from './sum'
/**
 * 计算数组的平均数
 */
export default function avg(data: number[]) {
    return sum(data) / data.length
}

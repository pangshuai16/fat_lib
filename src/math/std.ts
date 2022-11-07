import variance from "./variance";
/**
 * 计算数组的标准差
 */
export default function std(data: number[]) {
    return Math.sqrt(variance(data))
}

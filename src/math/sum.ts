/**
 * 计算数组的总和
 */
export default function sum(data: number[]) {
    return data.reduce((sum, now) => {
        return sum + now
    })
}

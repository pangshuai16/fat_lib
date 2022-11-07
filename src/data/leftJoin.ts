import {typeReal} from "../type";
import getAllKeys from "./getAllKeys";

/**
 * @desc 给定两个数组左连接
 */
export default function leftJoin(config: {
    leftArray: Object[],
    rightArray: Object[],
    keys: string | string[],
    filed?: string | string[],
    fillValue?: string | number | null | undefined | 'preValue'
}) {
    let {leftArray, rightArray, keys, filed, fillValue} = config
    // 初始化参数
    const keyList: string[] = typeof keys === 'string' ? [keys] : keys
    const leftFiled = getAllKeys(leftArray)
    const rightFiled = getAllKeys(rightArray)
    switch (typeReal(filed)) {
        case "string":
            filed = [filed as string]
            break
        case "data":
            filed = filed as string[]
            break
        default:
            filed = [...new Set([...leftFiled, ...rightFiled])]
    }
    const outData: any[] = []
    leftArray.forEach((left: any, leftIndex) => {
        // 获取对应的right
        let right: any = rightArray.find((right: any) => {
            return keyList.every(key => (left[key]) === right[key])
        })
        if (!right) {
            right = {}
        }

        // 左连接
        const item: any = {};
        (filed as string[]).forEach((key: string) => {
            if (leftFiled.includes(key)) {
                item[key] = left[key]
            } else if (fillValue === 'preValue') {
                const preIndex = leftIndex > 0 ? leftIndex - 1 : 0
                item[key] = right[key] ?? outData[preIndex]?.[key]
            } else {
                item[key] = right[key] ?? fillValue
            }
        })
        outData.push(item)
    })
    return outData
}

/**
 * @desc 给定两个数组左连接
 */
import {type} from "./type";

export function leftJoin(config: {
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
    switch (type(filed)) {
        case "string":
            filed = [filed as string]
            break
        case "array":
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

/**
 * @desc 两数组内连接
 */
export function innerJoin(config: {
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
    switch (type(filed)) {
        case "string":
            filed = [filed as string]
            break
        case "array":
            filed = filed as string[]
            break
        default:
            filed = [...new Set([...leftFiled, ...rightFiled])]
    }
    const outData: any[] = []

    leftArray.forEach((left: any) => {
        const right:any = rightArray.find((right: any) => {
            return (keyList as string[]).every(key => left[key] === right[key])
        })
        if (!right) return
        const item:any = {};
        (filed as string[]).forEach((key: string) => {
            if (leftFiled.includes(key)) {
                item[key] = left[key]
                console.log(key,item[key],outData)
            } else if (fillValue === 'preValue') {
                const preIndex = outData.length > 1 ? outData.length - 2 : 0
                console.log(preIndex,outData[preIndex]?.[key],key)
                item[key] = right[key] ?? outData[preIndex]?.[key]
            } else {
                console.log('else',key)
                item[key] = right[key] ?? fillValue
            }
        })
        outData.push(item)
    })
    return outData
}

export function getAllKeys(array: Object[]) {
    const keys: string[] = array.map(item => Object.keys(item)).flat()
    return [...new Set(keys)]
}

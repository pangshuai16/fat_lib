/**
 * @desc 给定两个数组左连接
*/

export function leftJoin(config: { leftArray: object[], rightArray: object[], keys: string | string[], params: string | string[], fillValue?: string | number | null | undefined | 'preValue' }) {
  let { leftArray, rightArray, keys, params, fillValue } = config
  // 初始化keys,params
  keys = typeof keys === 'string' ? [keys] : keys
  params = (typeof params === 'string' ? [params] : params)
  const fillValueB = fillValue === 'preValue' ? undefined : fillValue
  const data = leftArray.map((left: any) => {
    // 获取对应的object
    const right = rightArray.find((right: any) => (keys as any[]).every(key => left[key] === right[key]))

    // 替换对应值
    //@ts-ignore
    params.forEach(param => {
      // @ts-ignore
      left[param] = right?.[param] ?? fillValueB
    })
    return left
  })

  // 按preValue填充空值
  if (fillValue === 'preValue') {
    data.forEach((row, index) => {
      //@ts-ignore
      params.forEach(param => {
        // @ts-ignore
        row[param] = row[param] ?? data[index - 1][param] ?? undefined
      })
    })
  }
  return data
}

/**
 * @desc 两数组内连接
 */
export function innerJoin(config: { leftArray: object[], rightArray: object[], keys: string | string[], params: string | string[], fillValue?: any }) {
  let { leftArray, rightArray, keys, params, fillValue } = config
  // 初始化keys,params
  keys = typeof keys === 'string' ? [keys] : keys
  params = (typeof params === 'string' ? [params] : params)
  const fillValueB = fillValue === 'preValue' ? undefined : fillValue
  const data: object[] = []
  leftArray.forEach((left: any) => {
    const right = rightArray.find((right: any) => {
      return (keys as string[]).every(key => left[key] === right[key])
    })
    if (!right) return
    // @ts-ignore
    params.forEach(param => {
      // @ts-ignore
      left[param] = right?.[param] ?? fillValueB
    })
    data.push(left)
  })

  // 按preValue填充空值
  if (fillValue === 'preValue') {
    data.forEach((row, index) => {
      //@ts-ignore
      params.forEach(param => {
        // @ts-ignore
        row[param] = row[param] ?? data[index - 1][param] ?? undefined
      })
    })
  }
  return data
}

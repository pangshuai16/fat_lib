/**
 * 计算数组的总和
 */
export function $sum(data: number[]) {
  return data.reduce((sum, now) => {
    return sum + now
  })
}

/**
 * 计算数组的平均数
 */
export function $avg(data: number[]) {
  return $sum(data) / data.length
}

/**
 * 计算数组的方差
 */
export function $variance(data: number[]) {
  const avgValue = $avg(data)
  return data.reduce((pre, now) => {
    return Math.pow(now - avgValue, 2) + pre
  }) / data.length
}

/**
 * 计算数组的标准差
 */
export function $std(data: number[]) {
  return Math.sqrt($variance(data))
}

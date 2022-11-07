# fat_lib

刚创建的自用工具库，变动较大，不适合用于生产环境

## Data

### leftJoin

这个函数能根据`keys`左连接两个数组，并根据`params`返回一个新数组。

This function merges two arrays according to `keys` and returns a new array based on `params`.

- input
    - leftArray: object[],
    - rightArray: object[],
    - keys: string | string[],
    - params?: string | string[],
    - fillValue?: string | number | "preValue" | undefined | null
- output
    - object[]

### innerJoin

这个函数能根据`keys`内连接两个数组，并根据`params`返回一个新数组。

This function merges two arrays according to `keys` and returns a new array based on `params`.

- input
    - leftArray: object[],
    - rightArray: object[],
    - keys: string | string[],
    - params?: string | string[],
    - fillValue?: string | number | "preValue" | undefined | null
- output
    - object[]

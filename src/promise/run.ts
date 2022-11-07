/**
 * 使用run(Promise)运行异步函数，无需使用try...catch..捕获错误
 * @fn 待运行的函数
 * @return Promise[ result, error ]
 */
export default async function run(fn: Promise<any>) {
    try {
        const result = await fn;
        return [result];
    } catch (error) {
        return [null, error];
    }
};

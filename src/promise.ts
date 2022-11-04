/**
 * 使用run(Promise)运行异步函数，无需使用try...catch..捕获错误
 * @fn 待运行的函数
 * @return Promise[ result, error ]
 */
export const run = async (fn: Promise<any>) => {
    try {
        const result = await fn;
        return [result];
    } catch (error) {
        return [null, error];
    }
};

/**
 * 使用usePolling(function)，可以为指定函数创建轮询主体
 * @param fn {function} 传入需要轮询的函数
 * @start 使用.start(time)方法开始轮询，轮询间隔为time
 * @stop 使用.stop方法，结束轮询
 */
export const usePolling = (fn: Promise<any>) => {
    let timer: NodeJS.Timeout;
    return {
        start: function (ms: number) {
            const event = () => {
                clearTimeout(timer);
                run(fn).catch();
                timer = setTimeout(() => {
                    console.log("事件循环");
                    event();
                }, ms);
            };
            event();
        },
        stop: function () {
            clearTimeout(timer);
            // @ts-ignore
            timer = null;
        },
    };
};

/**
 * 生成新的函数，等待该函数运行完成后才可再次调用
 * @param fn {Function} 待运行的函数
 */
export function singleRunning(fn: Function) {
    let running = false;

    return async function () {
        if (running) return
        try {
            running = true;
            await fn()
        } finally {
            running = false
        }
    };
}

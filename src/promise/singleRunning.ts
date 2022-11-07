/**
 * 生成新的函数，等待该函数运行完成后才可再次调用
 * @param fn {Function} 待运行的函数
 */

export default function singleRunning(fn: Function) {
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

import run from "./run";
/**
 * 使用usePolling(function)，可以为指定函数创建轮询主体
 * @param fn {function} 传入需要轮询的函数
 * @start 使用.start(time)方法开始轮询，轮询间隔为time
 * @stop 使用.stop方法，结束轮询
 */
export default  function usePolling(fn: Promise<any>) {
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

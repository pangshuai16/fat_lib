"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singleRunning = exports.usePolling = exports.run = void 0;
const run = async (fn) => {
    try {
        const result = await fn;
        return [result];
    }
    catch (error) {
        return [null, error];
    }
};
exports.run = run;
const usePolling = (fn) => {
    let timer;
    return {
        start: function (ms) {
            const event = () => {
                clearTimeout(timer);
                (0, exports.run)(fn).catch();
                timer = setTimeout(() => {
                    console.log("事件循环");
                    event();
                }, ms);
            };
            event();
        },
        stop: function () {
            clearTimeout(timer);
            timer = null;
        },
    };
};
exports.usePolling = usePolling;
function singleRunning(fn) {
    let running = false;
    return async function () {
        if (running)
            return;
        try {
            running = true;
            await fn();
        }
        finally {
            running = false;
        }
    };
}
exports.singleRunning = singleRunning;

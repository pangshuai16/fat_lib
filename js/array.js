"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.innerJoin = exports.leftJoin = void 0;
function leftJoin(config) {
    let { leftArray, rightArray, keys, params, fillValue } = config;
    keys = typeof keys === 'string' ? [keys] : keys;
    params = (typeof params === 'string' ? [params] : params);
    const fillValueB = fillValue === 'preValue' ? undefined : fillValue;
    const data = leftArray.map((left) => {
        const right = rightArray.find((right) => keys.every(key => left[key] === right[key]));
        params.forEach(param => {
            left[param] = right?.[param] ?? fillValueB;
        });
        return left;
    });
    if (fillValue === 'preValue') {
        data.forEach((row, index) => {
            params.forEach(param => {
                row[param] = row[param] ?? data[index - 1][param] ?? undefined;
            });
        });
    }
    return data;
}
exports.leftJoin = leftJoin;
function innerJoin(config) {
    let { leftArray, rightArray, keys, params, fillValue } = config;
    keys = typeof keys === 'string' ? [keys] : keys;
    params = (typeof params === 'string' ? [params] : params);
    const fillValueB = fillValue === 'preValue' ? undefined : fillValue;
    const data = [];
    leftArray.forEach((left) => {
        const right = rightArray.find((right) => {
            return keys.every(key => left[key] === right[key]);
        });
        if (!right)
            return;
        params.forEach(param => {
            left[param] = right?.[param] ?? fillValueB;
        });
        data.push(left);
    });
    if (fillValue === 'preValue') {
        data.forEach((row, index) => {
            params.forEach(param => {
                row[param] = row[param] ?? data[index - 1][param] ?? undefined;
            });
        });
    }
    return data;
}
exports.innerJoin = innerJoin;

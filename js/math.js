"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$std = exports.$variance = exports.$avg = exports.$sum = void 0;
function $sum(data) {
    return data.reduce((sum, now) => {
        return sum + now;
    });
}
exports.$sum = $sum;
function $avg(data) {
    return $sum(data) / data.length;
}
exports.$avg = $avg;
function $variance(data) {
    const avgValue = $avg(data);
    return data.reduce((pre, now) => {
        return Math.pow(now - avgValue, 2) + pre;
    }) / data.length;
}
exports.$variance = $variance;
function $std(data) {
    return Math.sqrt($variance(data));
}
exports.$std = $std;

import data from "./data";
import math from "./math";
import promise from "./promise";
import request from "./request";
import string from "./string";
import time from "./time";
import touch from "./touch";
import type from "./type";

export const {
    getAllKeys,
    leftJoin,
    innerJoin
} = data

export const {
    sum,
    avg,
    variance,
    std
} = math

export const {
    run,
    singleRunning,
    usePolling
} = promise

export const {
    axios
} = request

export const {
    replaceMany
} = string

export const {
    formatDate,
    isWorkday
} = time

export const {
    useTouch
} = touch

export const {
    typeReal
} = type

export default {
    data,
    math,
    promise,
    request,
    string,
    time,
    touch,
    type
}

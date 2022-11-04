"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceMany = void 0;
const replaceMany = (word, regList) => {
    let str = word;
    for (const item of regList) {
        str = str.replace(item[0], item[1]);
    }
    return str;
};
exports.replaceMany = replaceMany;

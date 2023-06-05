"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToDate = void 0;
function stringToDate(date) {
    const datePars = date.split('/')
        .map(v => {
        return parseInt(v);
    });
    return new Date(datePars[2], datePars[1] - 1, datePars[0]);
}
exports.stringToDate = stringToDate;

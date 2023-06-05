"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs")); // npm install @types/node   все типы для node + для этого
const util_1 = require("./util");
class CsvFileReader {
    constructor(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    read() {
        this.data = fs_1.default.readFileSync(this.fileName, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map((row) => {
            return row.split(',');
        })
            .map((v) => {
            return [
                (0, util_1.stringToDate)(v[0]),
                v[1],
                v[2],
                parseInt(v[3]),
                parseInt(v[4]),
                v[5],
                v[6]
            ];
        });
    }
}
exports.CsvFileReader = CsvFileReader;

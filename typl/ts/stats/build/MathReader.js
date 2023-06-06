"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathReader = void 0;
const util_1 = require("./util");
class MathReader {
    constructor(reader) {
        this.reader = reader;
        this.mathes = [];
        this.data = [];
    }
    load() {
        this.reader.read();
        this.mathes = this.reader.data.map((row) => {
            return [
                (0, util_1.stringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
    }
}
exports.MathReader = MathReader;

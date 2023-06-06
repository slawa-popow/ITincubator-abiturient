"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathReader = void 0;
const CsvFileReader_1 = require("./CsvFileReader");
const util_1 = require("../util");
class MathReader extends CsvFileReader_1.CsvFileReader {
    mapRow(v) {
        return [
            (0, util_1.stringToDate)(v[0]),
            v[1],
            v[2],
            parseInt(v[3]),
            parseInt(v[4]),
            v[5],
            v[6]
        ];
    }
}
exports.MathReader = MathReader;

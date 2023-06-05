"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MathResult_1 = require("./MathResult");
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
console.log(reader.data[0][0]);
let manUnWin = 0;
for (let math of reader.data) {
    if (math[1] === 'Man United' && math[5] === MathResult_1.MathResult.HomeWin) {
        manUnWin += 1;
    }
    else if (math[2] === 'Man United' && math[5] === MathResult_1.MathResult.AwayWin) {
        manUnWin += 1;
    }
}
console.log(`Манчестер Юнайтед победил ${manUnWin} раз`);

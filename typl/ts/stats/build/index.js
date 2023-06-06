"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MathReader_1 = require("./MathReader");
const MathResult_1 = require("./MathResult");
const CsvFileReader_1 = require("./CsvFileReader");
const csvFR = new CsvFileReader_1.CsvFileReader('football.csv');
const mathR = new MathReader_1.MathReader(csvFR);
mathR.load();
let manUnWin = 0;
for (let math of mathR.mathes) {
    if (math[1] === 'Man United' && math[5] === MathResult_1.MathResult.HomeWin) {
        manUnWin += 1;
    }
    else if (math[2] === 'Man United' && math[5] === MathResult_1.MathResult.AwayWin) {
        manUnWin += 1;
    }
}
console.log(`Манчестер Юнайтед победил ${manUnWin} раз`);

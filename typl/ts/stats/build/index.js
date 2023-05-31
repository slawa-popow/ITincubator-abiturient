"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs")); // npm install @types/node   все типы для node + для этого
const matches = fs_1.default.readFileSync('football.csv', {
    encoding: 'utf-8'
})
    .split('\n')
    .map((row) => {
    return row.split(',');
});
let manUnWin = 0;
var MathResult;
(function (MathResult) {
    MathResult["HomeWin"] = "H";
    MathResult["AwayWin"] = "A";
    MathResult["Draw"] = "D";
})(MathResult || (MathResult = {}));
for (let math of matches) {
    if (math[1] === 'Man United' && math[5] === MathResult.HomeWin) {
        manUnWin += 1;
    }
    else if (math[2] === 'Man United' && math[5] === MathResult.AwayWin) {
        manUnWin += 1;
    }
}
console.log(`Манчестер Юнайтед победил ${manUnWin} раз`);

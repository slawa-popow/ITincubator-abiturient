
import { MathReader } from "./MathReader"; 
import { MathResult } from "./MathResult";
import { CsvFileReader } from "./CsvFileReader";

const csvFR = new CsvFileReader('football.csv');
const mathR = new MathReader(csvFR);
mathR.load();

let manUnWin: number = 0;

for (let math of mathR.mathes) {
    if (math[1] === 'Man United' && math[5] === MathResult.HomeWin) {
        manUnWin += 1;
    } else if (math[2] === 'Man United' && math[5] === MathResult.AwayWin) {
        manUnWin += 1;
    }
}

console.log(`Манчестер Юнайтед победил ${manUnWin} раз`);
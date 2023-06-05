
import { CsvFileReader } from "./CsvFileReader"; 
import { MathResult } from "./MathResult";

const reader = new CsvFileReader('football.csv');
reader.read();
console.log(reader.data[0][0]);

let manUnWin: number = 0;

for (let math of reader.data) {
    if (math[1] === 'Man United' && math[5] === MathResult.HomeWin) {
        manUnWin += 1;
    } else if (math[2] === 'Man United' && math[5] === MathResult.AwayWin) {
        manUnWin += 1;
    }
}

console.log(`Манчестер Юнайтед победил ${manUnWin} раз`);
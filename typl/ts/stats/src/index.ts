
import fs from "fs";  // npm install @types/node   все типы для node + для этого

const matches = fs.readFileSync('football.csv', {
    encoding: 'utf-8'
})
.split('\n')
.map((row: string): string[] => {
    return row.split(',');
});

let manUnWin: number = 0;

enum MathResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}

for (let math of matches) {
    if (math[1] === 'Man United' && math[5] === MathResult.HomeWin) {
        manUnWin += 1;
    } else if (math[2] === 'Man United' && math[5] === MathResult.AwayWin) {
        manUnWin += 1;
    }
}

console.log(`Манчестер Юнайтед победил ${manUnWin} раз`);
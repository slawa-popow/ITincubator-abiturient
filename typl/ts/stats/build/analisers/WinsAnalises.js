"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalises = void 0;
const MathResult_1 = require("../MathResult");
class WinsAnalises {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (let math of matches) {
            if (math[1] === this.team && math[5] === MathResult_1.MathResult.HomeWin) {
                wins += 1;
            }
            else if (math[2] === this.team && math[5] === MathResult_1.MathResult.AwayWin) {
                wins += 1;
            }
        }
        return `Команда ${this.team} выиграла ${wins} раз.`;
    }
}
exports.WinsAnalises = WinsAnalises;

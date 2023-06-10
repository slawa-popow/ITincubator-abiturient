import { MatchData } from "../MathData";
import { Analyser } from "../Summary";
import { MathResult } from "../MathResult";

export class WinsAnalises implements Analyser{
    constructor(public team: string) {}

    run(matches: MatchData[]): string {
        let wins: number = 0;

        for (let math of matches) {
            if (math[1] === this.team && math[5] === MathResult.HomeWin) {
                wins += 1;
            } else if (math[2] === this.team && math[5] === MathResult.AwayWin) {
                wins += 1;
            }
        }

        return `Команда ${this.team} выиграла ${wins} раз.`
    }
}
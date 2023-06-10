import { MatchData } from "./MathData";
import { WinsAnalises } from "./analisers/WinsAnalises";
import { HTMLtarget } from "./reports/HTMLreport";

export interface Analyser {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    constructor(public analyser: Analyser, public outputTarget: OutputTarget) {}

    static winsAnalyseHTML(team: string, fileName: string): Summary {
        return new Summary(new WinsAnalises(team), new HTMLtarget(fileName));
    }

    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyser.run(matches); 
        this.outputTarget.print(output);
    }
}
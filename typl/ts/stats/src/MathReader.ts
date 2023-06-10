import { MathResult } from "./MathResult";
import { stringToDate } from "./util";
import { MatchData } from "./MathData";


interface DataReader {
    read(): void;
    data: string[][];
}

export class MathReader {
    mathes: MatchData[] = [];
    data: string[][] = [];
    constructor(public reader: DataReader) {}

    load(): void {
        this.reader.read();
        this.mathes = this.reader.data.map((row: string[]): MatchData => {
            return [
              stringToDate(row[0]),
              row[1],
              row[2],
              parseInt(row[3]),
              parseInt(row[4]),
              row[5] as MathResult, // 'H', 'A', 'D'
              row[6]
            ];
          });
    }
}
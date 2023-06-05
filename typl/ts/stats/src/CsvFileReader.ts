import fs from "fs";  // npm install @types/node   все типы для node + для этого
import { stringToDate } from "./util";
import { MathResult } from "./MathResult";

type MathData = [Date, string, string, number, number, MathResult, string];

export class CsvFileReader {
    data: MathData[] = [];

    constructor(public fileName: string) {}

    read(): void {
        this.data = fs.readFileSync(this.fileName, {
            encoding: 'utf-8'
        })
        .split('\n')
        .map((row: string): string[] => {
            return row.split(',');
        })
        .map((v: string[]): MathData => {
            return [
                stringToDate(v[0]),
                v[1],
                v[2],
                parseInt(v[3]),
                parseInt(v[4]),
                v[5] as MathResult,
                v[6]
            ];
        });
    }


}
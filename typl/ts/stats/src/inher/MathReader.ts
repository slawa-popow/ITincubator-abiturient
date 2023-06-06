
import { CsvFileReader } from "./CsvFileReader";
import { stringToDate } from "../util";
import { MathResult } from "../MathResult";

type MathData = [Date, string, string, number, number, MathResult, string];

export class MathReader extends CsvFileReader<MathData> {
    mapRow(v: string[]): MathData {
        return [
            stringToDate(v[0]),
            v[1],
            v[2],
            parseInt(v[3]),
            parseInt(v[4]),
            v[5] as MathResult,
            v[6]
        ];
    }
}
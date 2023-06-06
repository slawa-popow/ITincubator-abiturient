import fs from "fs";  // npm install @types/node   все типы для node + для этого


export abstract class CsvFileReader<T> {
    data: T[] = [];

    constructor(public fileName: string) {}
    abstract mapRow(s: string[]): T;

    read(): void {
        this.data = fs.readFileSync(this.fileName, {
            encoding: 'utf-8'
        })
        .split('\n')
        .map((row: string): string[] => {
            return row.split(',');
        })
        .map(this.mapRow);
    }

}
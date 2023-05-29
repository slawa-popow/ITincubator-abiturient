import { ISortable } from "./ISortable";

export class CharCollection implements ISortable{
    constructor(public data: string) {}

    get length(): number {
        return this.data.length;
    }

    swap(lIndx: number, rIndx: number): void {
        const chars: string[] = [...this.data];
        [chars[lIndx], chars[rIndx]] = [chars[rIndx], chars[lIndx]];
        this.data = chars.join('');
    }

    compare(lIndx: number, rIndx: number): boolean {
        return this.data[lIndx].toLowerCase() > this.data[rIndx].toLowerCase();
    }

}
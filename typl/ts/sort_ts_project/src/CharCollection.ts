
import { Sorter } from "./Sorter";

export class CharCollection extends Sorter { // implements ISortable{
    constructor(public data: string) {
        super();
    }

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
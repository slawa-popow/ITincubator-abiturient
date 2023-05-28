
import { NumbersCollection } from "./NumbersCollection";

export class Sorter {
    constructor(public collection: NumbersCollection) {} 

    /**
     * Cортировка пузырьком
     */
    sort(): void {
        const { length } = this.collection;  // тоже самое что и const length = this.collection.length
        for (let i = 0; i < length; i += 1) {
            for (let j = 0; j < length - i - 1; j += 1) {
                if (this.collection.compare(j, j+1)) {
                    this.collection.swap(j, j+1);
                }
            }
        }
    }
}
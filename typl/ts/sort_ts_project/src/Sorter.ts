
export abstract class Sorter {

    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;
    abstract length: number;

    /**
     * Cортировка пузырьком
     */
    sort(): void {
        const { length } = this;  // тоже самое что и const length = this.collection.length
        for (let i = 0; i < length; i += 1) {
            for (let j = 0; j < length - i - 1; j += 1) {
                if (this.compare(j, j+1)) {
                    this.swap(j, j+1);
                }
            }
        }
    }
}
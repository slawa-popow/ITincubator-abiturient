"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    /**
     * Cортировка пузырьком
     */
    sort() {
        const { length } = this; // тоже самое что и const length = this.collection.length
        for (let i = 0; i < length; i += 1) {
            for (let j = 0; j < length - i - 1; j += 1) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
//# sourceMappingURL=Sorter.js.map
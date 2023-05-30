"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    /**
     * Длинна массива
     */
    get length() {
        return this.data.length;
    }
    /**
     * Сравнить
     * @param leftIndex
     * @param rightIndex
     * @returns
     */
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    /**
     * Поменять местами значения
     * this.data по переданным индексам (числам)
     * @param leftIndex
     * @param rightIndex
     */
    swap(leftIndex, rightIndex) {
        [this.data[leftIndex], this.data[rightIndex]] = [this.data[rightIndex], this.data[leftIndex]];
    }
}
exports.NumbersCollection = NumbersCollection;
//# sourceMappingURL=NumbersCollection.js.map
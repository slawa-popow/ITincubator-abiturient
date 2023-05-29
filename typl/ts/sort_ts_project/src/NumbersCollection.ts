import { ISortable } from "./ISortable";

export class NumbersCollection implements ISortable{
    constructor(public data: number[]) {}

    /**
     * Длинна массива
     */
    get length(): number {
        return this.data.length;
    }

    /**
     * Сравнить
     * @param leftIndex 
     * @param rightIndex 
     * @returns 
     */
    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }


    /**
     * Поменять местами значения
     * this.data по переданным индексам (числам)
     * @param leftIndex 
     * @param rightIndex 
     */
    swap(leftIndex: number, rightIndex: number): void {
        [this.data[leftIndex], this.data[rightIndex]] = [this.data[rightIndex], this.data[leftIndex]]; 
    }
}
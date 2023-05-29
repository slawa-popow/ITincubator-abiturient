
export interface ISortable {
    length: number;
    swap(lIndx: number, rIndx: number): void;
    compare(lIndx: number, rIndx: number): boolean;
}
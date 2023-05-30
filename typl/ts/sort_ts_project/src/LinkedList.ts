
import { Sorter } from "./Sorter";


class Node {
    public next: Node | null = null;
    public position: number = 0;
    constructor(public data: number) {}
}


export class LinkedList extends Sorter { //implements ISortable {
    public head: Node | null = null;

    constructor() {
        super();
    }

    add(data: number): void {
        const node = new Node(data);
        let tail = this.getTail();
        if (!tail) {
            this.head = node;
        } else {
            tail.next = node;
        }
    }

    get length(): number {
        let end = this.getTail();
        return (end) ? end.position + 1 : 0;
    }

    swap(lIndx: number, rIndx: number): void {
        const leftNode = this.at(lIndx);
        const rightNode = this.at(rIndx);
        const leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand
    }

    compare(lIndx: number, rIndx: number): boolean {
        if (!this.head) { throw new Error("Список пуст!") }
        return this.at(lIndx).data > this.at(rIndx).data;
    }

    print(): void {
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }


    at(index: number) {
        if (!this.head) {
            throw new Error("Вне границ связного списка!");
        }
        let node: Node | null = this.head;
        while (node) {
            if (node.position === index) {
                return node;
            }
            node = node.next;
        }
        throw new Error("Вне границ связного списка!");
    }


    private getTail(): Node | null {        
        let node = this.head;
        let position = 0;
        if (!node) { return node; }
        while (node?.next) {
            position = node.position;
            node = node.next;
            node.position = position + 1;
        }
        return node;
    }

   
}
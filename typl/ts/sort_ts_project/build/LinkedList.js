"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.position = 0;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super();
        this.head = null;
    }
    add(data) {
        const node = new Node(data);
        let tail = this.getTail();
        if (!tail) {
            this.head = node;
        }
        else {
            tail.next = node;
        }
    }
    get length() {
        let end = this.getTail();
        return (end) ? end.position + 1 : 0;
    }
    swap(lIndx, rIndx) {
        const leftNode = this.at(lIndx);
        const rightNode = this.at(rIndx);
        const leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }
    compare(lIndx, rIndx) {
        if (!this.head) {
            throw new Error("Список пуст!");
        }
        return this.at(lIndx).data > this.at(rIndx).data;
    }
    print() {
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
    at(index) {
        if (!this.head) {
            throw new Error("Вне границ связного списка!");
        }
        let node = this.head;
        while (node) {
            if (node.position === index) {
                return node;
            }
            node = node.next;
        }
        throw new Error("Вне границ связного списка!");
    }
    getTail() {
        let node = this.head;
        let position = 0;
        if (!node) {
            return node;
        }
        while (node === null || node === void 0 ? void 0 : node.next) {
            position = node.position;
            node = node.next;
            node.position = position + 1;
        }
        return node;
    }
}
exports.LinkedList = LinkedList;
//# sourceMappingURL=LinkedList.js.map
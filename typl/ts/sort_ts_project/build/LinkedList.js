"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.position = 0;
    }
}
class LinkedList {
    constructor() {
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
        let lnode = this.at(lIndx);
        let rnode = this.at(rIndx);
        let lnext = lnode.next;
        let rnext = rnode.next;
        lnode = rnode;
        lnode.next = lnext;
        rnode.next = rnext;
        if (lnode.position === 0) {
            let prevRnode = this.at(rIndx - 1);
            prevRnode.next = rnode;
        }
        else {
            let prevLnode = this.at(lIndx - 1);
            let prevRnode = this.at(rIndx - 1);
            prevRnode.next = rnode;
            prevLnode.next = lnode;
        }
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

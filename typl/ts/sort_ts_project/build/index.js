"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharCollection_1 = require("./CharCollection");
const LinkedList_1 = require("./LinkedList");
const numCollections = new NumbersCollection_1.NumbersCollection([1, 5, 8, 0, -3, 12]);
const strCollections = new CharCollection_1.CharCollection('AdfgRGFgdoweijkg');
const linkedCollections = new LinkedList_1.LinkedList();
linkedCollections.add(59);
linkedCollections.add(-4);
linkedCollections.add(0);
linkedCollections.add(-21);
numCollections.sort();
strCollections.sort();
linkedCollections.sort();
console.log(numCollections.data);
console.log(strCollections.data);
linkedCollections.print();
//# sourceMappingURL=index.js.map
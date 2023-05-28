"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const numberCollection = new NumbersCollection_1.NumbersCollection([1, 5, 8, 0, -3, 12]);
const sorter = new Sorter_1.Sorter(numberCollection);
sorter.sort();
console.log(sorter.collection.data);

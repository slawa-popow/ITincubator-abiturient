
import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numberCollection = new NumbersCollection([1, 5, 8, 0, -3, 12]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(sorter.collection.data);
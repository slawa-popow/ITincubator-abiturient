
import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharCollection } from "./CharCollection";
import { LinkedList } from "./LinkedList";

const numCollections = new NumbersCollection([1, 5, 8, 0, -3, 12]);
const strCollections = new CharCollection('AdfgRGFgdoweijkg');
const linkedCollections = new LinkedList();

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

import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharCollection } from "./CharCollection";
import { LinkedList } from "./LinkedList";

const numCollections = new NumbersCollection([1, 5, 8, 0, -3, 12]);
const strCollections = new CharCollection('AdfgRGFgdoweijkg');
const linkedCollections = new LinkedList();

linkedCollections.add(5);
linkedCollections.add(-4);
linkedCollections.add(0);
linkedCollections.add(21);

linkedCollections.print();

const sorterNums = new Sorter(numCollections);
const sorterStr = new Sorter(strCollections);
// const sorterLinkedList = new Sorter(linkedCollections);

sorterNums.sort();
sorterStr.sort();

// sorterLinkedList.sort();

console.log(numCollections.data, '\n', strCollections.data, '\n', );
linkedCollections.swap(0, 1);
linkedCollections.print();
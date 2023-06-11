
class ArrOfNum {
    constructor(public arr: number[]) {}

    get(index: number): number {
        return this.arr[index];
    }
}


class ArrOfStr {
    constructor(public strArr: string[]) {}
    
    get(index: number): string {
        return this.strArr[index];
    }
}

class ArrOfAny<T> {
    constructor(public coll: T[]) {}

    get(index: number): T {
        return this.coll[index];
    }

    getAll(): T[] {
        return this.coll;
    }
}

const narr = new ArrOfAny<number>([1, 2, 89]);
const sarr = new ArrOfAny<string>("asdf".split(''));
console.log(narr.getAll(), '\n', sarr.getAll());

function printStr(arr: string[]): void {
    arr.forEach(v => {
        console.log(v);
    });
}

function printNum(arr: number[]): void {
    arr.forEach(v => {
        console.log(v);
    });
}

function printAny<T>(arr: T[]): void {
    arr.forEach(v => {
        console.log(v);
    });
}

printAny([4,89,-8,96]);


class Human {
    print() {
        console.log('A I am human');
    }
}

class Robot {
    print() {
        console.log('A I am robot')
    }
}

interface Printable {
    print(): void;
}

function printT<T extends Printable>(arr: T[]): void {
    for (let i=0; i < arr.length; i++) {
        arr[i].print();
    }
}

printT<Printable>([new Robot, new Human]);

















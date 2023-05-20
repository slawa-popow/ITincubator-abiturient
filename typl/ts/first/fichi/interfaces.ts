
interface Reportable {
    summary(): string;
}


const oldCar = {
    name: 'sivic',
    year: 2000,
    color: 'green',
    broken: false,
    summary() {
        return `name: ${this.name}  broken: ${this.broken}`;
    }
}

const rom = {
    color: 'brown',
    sugar: 150,
    summary() {
        return `sugar is: ${this.sugar} gramm.`;
    }
};

const printSummary: (vehicle: Reportable) => void = (item: Reportable): void => {
    console.log(item.summary());
};

printSummary(oldCar);
printSummary(rom);
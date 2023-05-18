const person: {age: number; firstname: string; lastname: string; isCriminal: boolean; roms: number[]} = {
    age: 32,
    firstname: "John",
    lastname: "Doe",
    isCriminal: true,
    roms: [1, 2, 3, 4],
}

const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};
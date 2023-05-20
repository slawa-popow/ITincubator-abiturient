
interface ModFuncs {
    'addSquare': (a: number, b: number)=> number,
    'addStrings': (str1: string, str2: string) => string
}

const modFuncs: ModFuncs = (function(){

  function addSquare(a: number, b: number): number {
    return (a + b) ** 2;
}

const addStrings: (str1: string, str2: string) => string = (str1: string, str2: string) => {
    return str1 + str2;
};  

const publicApi: ModFuncs = { addSquare, addStrings };
return publicApi;

})();


console.log(modFuncs.addSquare(5, 2));

// -------------------------------------------------------------

const forecast = {
    date: new Date(),
    weather: "sunny",
}

const logWeather = ({date, weather}: {date: Date; weather: string}): void => {
    console.log(`дата: ${date} погода: ${weather}`);
};

logWeather(forecast);

// ---------------------------------------------------------------

const profile = {
    name: 'John',
    age: 125,
    coordinates: {
        lat: 1,
        lng: 34,
    },
    setAge(age: number): void {
        this.age = age;
    }
}

const { age }: {age: number} = profile;
const { coordinates: {lat: newNameLat, lng: newNameLng} }: {coordinates: {lat: number; lng: number}} = profile;

// --------------------------------------------------------------------

const arr: (number | string | boolean)[] = [];
const bucket: (number | boolean)[] = [2, true, 54];
for (let i = 0 ; i < bucket.length; i+=1) {
    arr.push(bucket[i]);
}

// --------------------------------------------------------------------

const drink = {
    color: 'black',
    carbonare: true,
    alcoholProcents: 5
}

type Drink = [string, boolean, number];
type Some = number;

let beer: Drink = ['orange', false, 6];
let cola: Drink = ['black', true, 0];

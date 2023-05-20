// для исправления в ошибки типов: "npm audit" потом "npm audit fix --force"
// если библиотека типа с уязвимостью или устарела, то npm не установит ее.
// parcel index.html - запуск парселя, ctrl+c - стоп сервера парселя.
import faker from 'faker';  

export class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        // this.name = faker.address.city();  
    }
}
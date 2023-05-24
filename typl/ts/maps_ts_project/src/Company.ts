import faker from "faker"


export class Company {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }
    colorLabel: string;

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
        this.colorLabel = 'red';
    }

    get coords(): number[] {
        return Object.values(this.location);
    }

    public clickHandler(e: Event): void {
        console.log('Company id: ', this.id);
    }
}
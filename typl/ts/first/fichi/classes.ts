

class Vehicle {
    // color: string = 'red';
    
    constructor(protected color: string) {  // так создается и инициализ public color = 'sdfsf'
    }

    drive(): void {
        this.startProcDriving();
        this.stop();
        console.log(`color: ${this.color}`);
    }

    private stop(): void {
        console.log('Остановился.', this);
    }

    private startProcDriving(): void {
        console.log('Я еду.', this);
    }

    protected beep(): void {
        console.log('beeeeeeep');
    }
}

class Car extends Vehicle {
    constructor(public wheel: number, color: string) {
        super(color);
    }
    b(): void {
        this.beep();
    }
}


const vehicle = new Vehicle('yellow');
const car = new Car(5, 'blue');
vehicle.drive();

car.drive();
car.b();
 
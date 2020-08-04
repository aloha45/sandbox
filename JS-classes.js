class Vehicle {
    constructor(vin, make, model){
        this.vin = vin;
        this.make = make;
        this.model = model;
        this.running = false;
    }
        start(){
            this.running = true;
            console.log('running...');
    }
        stop(){
                this.running = false;
                console.log('deactivating...')
        }
    }

let plane = new Vehicle('X123Y', 'Boeing', '757')

let car = new Vehicle('A1234', 'Toyota', 'Camry')

class Plane extends Vehicle {
    constructor (vin, make, model, airline) {
        super(vin, make, model);
        this.airline = airline;
    }
    engageAutoPiot(){
        console.log("Wheeeee!!");
    }
}

let spyPlane = new Plane ('secret', 'Lockheed', 'SR-71', 'USA');

class Automobile extends Vehicle {
    constructor (vin, make, model, numDoors) {
        super (vin, make, model);
        this.numDoors = numDoors;
    }
    honk (){
        console.log("Beep!");
    }
}
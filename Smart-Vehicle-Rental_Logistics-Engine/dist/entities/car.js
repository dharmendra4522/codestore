import { Vehicle } from "../models/vehical.js";
export class Car extends Vehicle {
    passengerCapacity;
    constructor(id, model, baseRate, passengerCapacity) {
        super(id, model, baseRate);
        this.passengerCapacity = passengerCapacity;
    }
    getVehicleType() {
        return "Car";
    }
    calculatePrice(hours) {
        let price = this._baseRate * hours + 200;
        return price;
    }
}
//# sourceMappingURL=car.js.map
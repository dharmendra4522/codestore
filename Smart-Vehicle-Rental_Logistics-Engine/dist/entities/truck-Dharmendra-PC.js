import { Vehicle } from "../models/vehical.js";
export class Truck extends Vehicle {
    loadCapacity;
    constructor(id, model, baseRate, loadCapacity) {
        super(id, model, baseRate);
        this.loadCapacity = loadCapacity;
    }
    getVehicleType() {
        return "Truck";
    }
    calculatePrice(hours) {
        let price = this._baseRate * hours + 300;
        return price;
    }
}
//# sourceMappingURL=truck.js.map
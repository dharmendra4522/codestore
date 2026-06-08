// # Concrete Inherited Classes and User profiles
import { Vehicle } from "../models/vehical.js";
export class Bike extends Vehicle {
    constructor(id, model, baseRate) {
        super(id, model, baseRate);
    }
    getVehicleType() {
        return "Bike";
    }
    calculatePrice(hours) {
        let price = this._baseRate * hours + 100;
        return price;
    }
}
//# sourceMappingURL=bike.js.map
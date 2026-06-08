// # Base Blueprints and Abstract Classes
import {} from "../type/rentalTypes.js";
export class Vehicle {
    id;
    model;
    _baseRate;
    static totalVehiclesRented = 0;
    status = "available";
    constructor(id, model, _baseRate) {
        this.id = id;
        this.model = model;
        this._baseRate = _baseRate;
    }
    rent() {
        if (this.status !== "available") {
            throw new Error(`Vehicle ${this.id} is not available for rent.`);
        }
        this.status = "rented";
        Vehicle.totalVehiclesRented++;
    }
    returnVehicle() {
        if (this.status !== "rented") {
            throw new Error(`Vehicle ${this.id} is not currently rented.`);
        }
        this.status = "available";
    }
}
//# sourceMappingURL=vehical.js.map
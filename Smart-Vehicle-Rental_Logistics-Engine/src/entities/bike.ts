// # Concrete Inherited Classes and User profiles
import { Vehicle } from "../models/vehical.js";


export class Bike extends Vehicle {
    constructor(id: string, model: string, baseRate: number){
        super(id, model, baseRate);
    }

    public getVehicleType(): string{
        return "Bike";
    }

    public calculatePrice(hours: number): number {
        let price = this._baseRate * hours + 100;
        return price;
    }
}
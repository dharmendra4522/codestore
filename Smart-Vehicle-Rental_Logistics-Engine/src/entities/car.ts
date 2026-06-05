import { Vehicle } from "../models/vehical.js";

export class Car extends Vehicle {
    constructor(id: string, model: string, baseRate: number, public passengerCapacity: number) {
        super(id, model, baseRate);
    }
    public getVehicleType(): string {
        return "Car";
    }
    public calculatePrice(hours: number): number {
        let price = this._baseRate * hours + 200;

        return price;
    }
}
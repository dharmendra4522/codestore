import { Vehicle } from "../models/vehical.js";

export class Truck extends Vehicle{
    constructor(id:string, model:string, baseRate:number, public loadCapacity: number){
        super(id, model, baseRate);
    }
    public getVehicleType(): string{
        return "Truck";
    }

    public calculatePrice(hours: number): number {
        let price = this._baseRate * hours + 300;
        return price;
    }
    
}
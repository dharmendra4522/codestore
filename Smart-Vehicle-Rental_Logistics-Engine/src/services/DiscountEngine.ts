// # Business Logic, Generics, and Utilities
import { Car } from "../entities/car.js";
import { Vehicle } from "../models/vehical.js";

export class DiscountEngine{
    public static applyDiscount(vehicle: Vehicle, totalCost: number): number {
        if(vehicle instanceof Car){
            console.log(`Applying discount for Car ${vehicle.id}, Discounted 10% off.`);
            return totalCost * 0.9; // 10% discount for cars
        }
        console.log(`Standard rate apply for ${vehicle.getVehicleType()}.`);
        return totalCost;
    }
}

// # Base Blueprints and Abstract Classes
import { type IRental, type VehicleStatus } from "../type/rentalTypes.js";

export abstract class Vehicle implements IRental {
    public static totalVehiclesRented: number = 0;
    public status: VehicleStatus = "available";

    constructor(public readonly id: string, public model: string, protected _baseRate: number) {}

    public rent(): void{
        if (this.status !== "available") {
            throw new Error(`Vehicle ${this.id} is not available for rent.`);
        }
        this.status = "rented";
        Vehicle.totalVehiclesRented++;
    }

    public returnVehicle(): void{
        if (this.status !== "rented") {
            throw new Error(`Vehicle ${this.id} is not currently rented.`);
        }
        this.status = "available";
    }

    public abstract getVehicleType(): string;
    public abstract calculatePrice(hours: number): number ;
}

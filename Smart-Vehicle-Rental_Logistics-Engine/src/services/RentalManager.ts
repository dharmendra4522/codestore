import type { Vehicle } from "../models/vehical.js";

// this class is responsible for managing the rental process, including inventory management and rental transactions. It uses generics to allow for different types of vehicles to be managed under a single interface.

export class RentalManager<T extends Vehicle> {
    private inventory: T[] = [];  // Inventory array of vehicles available for rent

    public addVehicle(vehicle: T): void{
        this.inventory.push(vehicle);
        console.log(`Vehicle ${vehicle.id} added to inventory.`);
    }

    // Additional methods for rental transactions, inventory management, etc., can be added here
    public getInventory(): T[] {
        return this.inventory;
    }
}
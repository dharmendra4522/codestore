import type { Vehicle } from "../models/vehical.js";
export declare class RentalManager<T extends Vehicle> {
    private inventory;
    addVehicle(vehicle: T): void;
    getInventory(): T[];
}
//# sourceMappingURL=RentalManager.d.ts.map
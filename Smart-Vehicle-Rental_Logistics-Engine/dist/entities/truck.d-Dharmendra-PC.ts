import { Vehicle } from "../models/vehical.js";
export declare class Truck extends Vehicle {
    loadCapacity: number;
    constructor(id: string, model: string, baseRate: number, loadCapacity: number);
    getVehicleType(): string;
    calculatePrice(hours: number): number;
}
//# sourceMappingURL=truck.d.ts.map
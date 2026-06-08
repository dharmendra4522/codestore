import { Vehicle } from "../models/vehical.js";
export declare class Bike extends Vehicle {
    constructor(id: string, model: string, baseRate: number);
    getVehicleType(): string;
    calculatePrice(hours: number): number;
}
//# sourceMappingURL=bike.d.ts.map
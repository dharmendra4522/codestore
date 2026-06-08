import { Vehicle } from "../models/vehical.js";
export declare class Car extends Vehicle {
    passengerCapacity: number;
    constructor(id: string, model: string, baseRate: number, passengerCapacity: number);
    getVehicleType(): string;
    calculatePrice(hours: number): number;
}
//# sourceMappingURL=car.d.ts.map
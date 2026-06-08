import { type IRental, type VehicleStatus } from "../type/rentalTypes.js";
export declare abstract class Vehicle implements IRental {
    readonly id: string;
    model: string;
    protected _baseRate: number;
    static totalVehiclesRented: number;
    status: VehicleStatus;
    constructor(id: string, model: string, _baseRate: number);
    rent(): void;
    returnVehicle(): void;
    abstract getVehicleType(): string;
    abstract calculatePrice(hours: number): number;
}
//# sourceMappingURL=vehical.d.ts.map
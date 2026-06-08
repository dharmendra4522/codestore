export type VehicleStatus = "available" | "rented" | "maintenance";
export type UserRole = "customer" | "admin";
export interface IRental {
    calculatePrice(hours: number): number;
    rent(): void;
    returnVehicle(): void;
}
//# sourceMappingURL=rentalTypes.d.ts.map
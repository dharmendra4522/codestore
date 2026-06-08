// Application Entry Point
import { Bike } from "./entities/bike.js";
import { Car } from "./entities/car.js";
import { Truck } from "./entities/truck.js";
import { UserAccount } from "./entities/userAccount.js";
import type { Vehicle } from "./models/vehical.js";
import { DiscountEngine } from "./services/DiscountEngine.js";
import { RentalManager } from "./services/RentalManager.js";

// Initialize Rental Manager and User Account
const customer = new UserAccount("John Doe", "customer", 500000, "john@gmail.com");
const carManager = new RentalManager<Vehicle>();


// Create Vehicles and Add to Inventory
const primiumCar = new Car("C001", "Tesla Model 3", 500, 5);
const sportBike = new Bike("B001", "Yamaha R1", 300);
const truck = new Truck("T001", "Volvo FH", 80000, 20000);

// Add vehicles to inventory
carManager.addVehicle(primiumCar);
carManager.addVehicle(sportBike);
carManager.addVehicle(truck);

console.log("----Processing Transactions----");


try {
    primiumCar.rent();
    console.log(`car status of ${primiumCar.model}: ${primiumCar.status}`);
    let bill = primiumCar.calculatePrice(4);
    bill = DiscountEngine.applyDiscount(primiumCar, bill);

    console.log(`Total bill for renting ${primiumCar.model} for 4 hours: $${bill.toFixed(2)}`);

    customer.Balance -= bill;
    console.log(`Updated balance for ${customer.username}: $${customer.Balance.toFixed(2)}`);


} catch (error) {
    console.error("Error during transaction:", error);
};
'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');
const VehicleClass = require('./vehicle-class.js');
const VehicleFactory = require('./vehicle-factory.js');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class
const toyota = new VehicleClass.Car('toyota', 4);
console.log(toyota.name, toyota.drive(), toyota.stop());

const honda = new VehicleClass.Motorcycle('honda', 2);
console.log(honda.name, honda.wheelie(), honda.stop());

// Implement a car and motorcycle using a Factory
const ford = new VehicleFactory.CarFactory('ford', 4);
console.log(ford.name, ford.drive(), ford.stop());

const hundai = new VehicleFactory.MotorcycleFactory('hundai', 2);
console.log(hundai.name, hundai.wheels, hundai.wheelie(), hundai.stop());
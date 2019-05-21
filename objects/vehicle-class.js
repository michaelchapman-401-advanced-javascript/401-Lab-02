'use strict';

class Vehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }

  drive() {
    return 'Moving Foward';
  }

  stop() {
    return 'Stopping';
  }
}

class Car extends Vehicle {
  constructor(name, wheels) {
    super(name, wheels);
  }
}

class Motorcycle extends Vehicle {
  constructor(name, wheels) {
    super(name, wheels);
  }

  wheelie() {
    return 'WHEEEEE';
  }
}

module.exports = {Car, Motorcycle};

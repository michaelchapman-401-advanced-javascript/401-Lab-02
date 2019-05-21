'use strict';

const Vehicle = () => ({
  drive: () => {
    return 'Moving Foward';
  },
  stop: () => {
    return 'Stopping';
  },
});

function CarFactory(name, wheels) {
  let car = Object.assign(
    {wheels},
    {name},
    Vehicle()
  );

  return Object.freeze(car);
}

function MotorcycleFactory(name, wheels) {
  let motorcycle = Object.assign(
    {wheels},
    {name},
    {wheelie},
    Vehicle()
  );

  function wheelie() { return 'Wheee!'; }

  return Object.freeze(motorcycle);
}

module.exports = {CarFactory, MotorcycleFactory};
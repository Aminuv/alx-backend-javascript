import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // git clone it from 10-Car
  cloneCar() {
    return new Car();
  }
}

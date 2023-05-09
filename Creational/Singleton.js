/* A Creational Design Pattern usually used for creating a single source of truth in an application */

// Cars

class Car {
  constructor(tyres, name, model, year) {
    this.tyres = tyres;
    this.name = name;
    this.model = model;
    this.year = year;
  }
}

const instance = new Car(4, "Toyota", "Lexus", 2010);

Object.freeze(instance);

console.log(Object.values(instance));



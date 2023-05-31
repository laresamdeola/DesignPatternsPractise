class Car {
  constructor(model, type){
    this.model = model;
    this.type = type;
  }

  displayCar(){
    return this.model + " " + this.type;
  }
}

const toyota = new Car("Taurus", "Sedan");

console.log(toyota.displayCar());
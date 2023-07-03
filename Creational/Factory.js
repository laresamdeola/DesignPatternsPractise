// A creational pattern where a factory of objects is created.

class Car {
  constructor(tyres, name, model, year){
    this.tyres = tyres;
    this.name = name;
    this.model = model;
    this.year = year;
  }

  displayModel(){
    return this.model;
  }
}

const toyota = new Car(4, "Lexus", "Carina", 2015);

const audi = new Car(4, "Audi", "4s", "2009");

console.log(audi.displayModel());
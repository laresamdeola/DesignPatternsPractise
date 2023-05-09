// Allows the creation of a family of related objects without concrete classes.

class Car {
  constructor(tyres, name){
    this.tyres = 4;
    this.name = "Car";
  }

  displayDetails(){
    return this.tyres, this.name;
  }
}

class Boat {
  constructor(tyres, name){
    this.tyres = 0;
    this.name = "Boat";
  }

  displayDetails(){
    return this.tyres, this.name;
  }
}

const typeOfTransport = {
  createTransportMode : (type) {
    switch(type){
      case "car":
        return new Car();
        break;
      case "boat":
        return new Boat();
        break;
      default:
        return null;
    }
  }
}

console.log(typeOfTransport.createTransportMode("Boat"));
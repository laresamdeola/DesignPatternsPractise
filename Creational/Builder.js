const toyota = {
  name: "Toyota",
  model: "Lexus",
  year: 2010
};

const honda = {
  name: "Honda",
  model: "Pilot",
  year: 2008
};

const date = new Date();
const currentYear = date.getFullYear();

const ageOfCar = (object) => {
  object.carAge = () => {return currentYear - object.year;};
};

const displayCar = (object) => {
  object.carDisplay = () => {return object.name + " " + object.model;}
};

const moveCar = (object) => {
  object.move = () => console.log(`${object.name} has vroom`);
};

//console.log(ageOfCar(honda));
moveCar(honda);
honda.move();
moveCar(toyota);
toyota.move();
ageOfCar(toyota);
console.log(toyota.carAge());
ageOfCar(honda);
console.log(honda.carAge());
displayCar(toyota);
console.log(toyota.carDisplay());
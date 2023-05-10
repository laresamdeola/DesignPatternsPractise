const car = {
  age: (obj) => {return new Date().getFullYear() - obj.year;},
  display: (obj) => {return obj.name + " " + obj.model;}
};

const toyota = {
  name: "Toyota",
  model: "Highlander",
  year: 2020
};

Object.setPrototypeOf(toyota, car);
console.log(toyota.age(toyota));
console.log(toyota.display(toyota));
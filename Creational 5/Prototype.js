const Country = {
  capital: (obj) => {
 return obj.capital;
},
  continent: (obj) => {
 return obj.continent;
},
  countryInfo: (obj) => {
 return obj.capital + "**" + obj.continent;
}
};

const nigeria = {
  capital: "Abuja",
  continent: "Africa"
};

Object.setPrototypeOf(nigeria, Country);

console.log(nigeria.countryInfo(nigeria));
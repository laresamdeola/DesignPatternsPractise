const countryprops = {
  capital: "",
  continent: ""
}

const countrymethods = {
  info: (country) => {
    return country.capital;
  }
}

const nigeria = {
  capital: "Nigeria",
  continent: "Africa"
};

console.log(countrymethods.info(nigeria));
class Country {
  constructor(capital, continent){
    this.capital = capital;
    this.continent = continent;
  }

  countryInfo(){
    return this.capital + " " + this.continent;
  }
}

const nigeria = new Country();
nigeria.capital = "Abuja";
nigeria.continent = "Africa";

Object.freeze(nigeria);
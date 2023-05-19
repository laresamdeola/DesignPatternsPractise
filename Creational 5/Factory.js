class Country {
  constructor(capital, continent){
    this.capital = capital;
    this.continent = continent;
  }

  countryInfo(){
    return this.capital + " " + this.continent;
  }
}

let nigeria = new Country("Abuja", "Africa");
class Musician {
  constructor(){
    this.artistName = artistName;
    this.genre = genre;
  }

  artistInfo(){
    return this.artistName + " " + this.artistInfo;
  }
}

const fela = new Musician("Fela Anikulapo", "Afrobeat");

Object.freeze(fela);

console.log(fela.artistInfo());
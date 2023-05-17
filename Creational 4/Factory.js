class Musician {
  constructor(artisteName, genre){
    this.artisteName = artisteName;
    this.genre = genre;
  }

  artisteInfo(){
    return this.artisteName + " "  + this.genre;
  }
}

const fela = new Musician("Anikulapo", "Afrobeat");
const music = {
  artistName: (object) => {
 return object.name;
},
  artistGenre: (object) => {
    return object.genre
  }
}

const sade = {
  name: "Sade",
  genre: "Jazz Soul"
}

Object.setPrototypeOf(sade, music);

console.log(sade.artistName(sade));
const music = {
  name: (object) => {
 return object.name;
},
  genre: (object) => {
    return object.genre
  }
}

const sade = {
  name: "Sade",
  genre: "Jazz Soul"
}

console.log(sade.name(sade));
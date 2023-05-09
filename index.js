class Literature {
  constructor(title, author){
    this.title = title;
    this.author = author;
  }
}

class Fiction {
  constructor(title, author){
    this.title = title;
    this.author = author;
  }
}

const genre = {
  createGenre : function(type) {
    switch(type) {
      case "literature":
        return new Literature();
        break;
      case "Fiction":
        return new Fiction();
        break;
      default:
        return null;
    }
  }
}

const lion = genre.createGenre("literature");
lion.title = "The lion and the jewel";
lion.author = "Wole Soyinka";

console.log(lion.title);
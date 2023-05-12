// This design pattern allows us to create families of related classes without specifying a concrete class.

class Literature{
  constructor(){
    this.title = "";
    this.author = "";
    this.literature = true
  }

  display(){
    return this.title + "--" + this.author;
  }
}

class Fiction {
  constructor(){
    this.title = "";
    this.author = "";
    this.literature = false;
  }
}

const genreFactory = {
  createGenre: (type) => {
    type = type.toLowerCase();
    switch(type){
      case "literature":
        return new Literature();
        break;
      case "fiction":
        return new Fiction();
        break;
      default:
        return "This genre isn't available yet";
    }
  }
}

const wonodi = genreFactory.createGenre("LITERATURE");
wonodi.title = "Collections V";
wonodi.author = "Okogbule Wonodi";
wonodi.literature = true;

console.log(wonodi.display());
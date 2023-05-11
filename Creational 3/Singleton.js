class Book {
  constructor(author, title, publicationDate) {
    this.author = author;
    this.title = title;
    this.publicationDate = publicationDate;
  }

  displayBookTitle(){
    return this.author + " " + this.title.toUpperCase();
  }
}

const thingsFallApart = new Book("Chinua Achebe", "Things Fall Apart", 1968);

Object.freeze(thingsFallApart);
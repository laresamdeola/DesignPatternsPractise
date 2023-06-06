class Book {
  constructor(title, author, publicationDate){
    this.title = title;
    this.author = author;
    this.publicationDate = publicationDate;
  }
}

var thingsFallApart = new Book("Things Fall Apart", "Chinua Achebe", 1967);

Object.freeze(thingsFallApart);
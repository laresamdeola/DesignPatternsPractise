class Book{
  constructor(title, author, publicationDate){
    this.title = title;
    this.author = author;
    this.publicationDate = publicationDate;
  }
}

var book1 = new Book("Things Fall Apart", "Chinua Achebe", 1967);

console.log(book1.title);
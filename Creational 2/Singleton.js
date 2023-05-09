class Book {
  constructor(title, author, publishedYear){
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
  }

  bookDetails(){
    return this.title, this.author, this.publishedYear;
  }
}

const book1 = new Book("Things fall apart", "Chinua Achebe", 1968);

Object.freeze(book1);

console.log(book1.bookDetails());
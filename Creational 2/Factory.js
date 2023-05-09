class Book {
  constructor(title, author, publishedYear){
    this.title = title;
    this.author = äuthor;
    this.publishedYear = publishedYear;
  }

  authorName(){
    return this.author;
  }
}

const literature = new Book("Lion and the Jewel", "Wole Soyinka", 1974);

console.log(literature.title);
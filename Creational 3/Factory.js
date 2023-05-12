class Book {
  constructor(author, title, publicationDate){
    this.author = author;
    this.title = title;
    this.publicationDate = publicationDate;
  }

  displayBook(){
    return this.title + " " + this.author;
  }
}

const poetry = new Book();
poetry.author = "Okogbule Wonodi";
poetry.title = "Collections I";
poetry.publicationDate = 1978;
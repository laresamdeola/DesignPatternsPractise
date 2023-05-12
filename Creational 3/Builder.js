// In this design pattern, we build out the properties and methods into separate entities.

const BookProperties = {
  title: (object) => {return object.title},
  author: (object) => {return object.author},
  publicationDate: (object) => {return object.publicationDate}
};

const BookMethods = {
  displayBook: (object) => {return object.title.toUpperCase()},
  bookAge: (object) => {
    let date = new Date().getFullYear();
    return date - object.publicationDate;
  }
};

const wonodi = {
  title: "Collections IV",
  author: "Okogbule Wonodi",
  publicationDate: 1978
}

console.log(BookProperties.title);
console.log(BookProperties.author);
console.log(BookProperties.publicationDate);
console.log(BookMethods.displayBook(wonodi));
console.log(BookMethods.bookAge(wonodi));
// In this pattern, one creates an object using another object as blueprint, inheriting its properties and methods.

const book = {
  title: "",
  author: "",
  publicationDate: 0,
  displayBook: (object) => {return object.title + "-" + object.author}
};

const wonodi = {
  title: "Collections II",
  author: "Okogbule Wonodi",
  publicationDate: 1978
};

Object.setPrototypeOf(wonodi, book);

console.log(wonodi.author);
console.log(wonodi.title);
console.log(wonodi.displayBook(wonodi));
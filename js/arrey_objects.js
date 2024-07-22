//  приклад масив об'єктів та доступ до значень об'єкту
const books = [
  {title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,},
  {title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,},
  {title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,}
];

console.log("books", books);  //   виводить весь масив об'єктів
console.log("books", books[0]);  //  виводить перше значення об'єкту в масиві

for (const book of books) {
  console.log(book); // виводить ітерацію об'єктів book по масиву books (спочатку перший, потім другий ...)
    //  звернення до першого (потім другого ....) об'єкту в масиві, до ключа title
  console.log(book.title); // виводить ітерацію значення ключа book.title по масиву books (спочатку перший, потім другий ...)
  console.log(book.author);  // виводить ітерацію значення ключа book.author по масиву books (спочатку перший, потім другий ...)
  console.log(book.rating);  // виводить ітерацію значення ключа book.rating по масиву books (спочатку перший, потім другий ...)
}



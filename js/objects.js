// 1-й спосіб звернення до елементів об'єкту
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     }
// };

// apartment.owner.email = "new@google.com";  //  перевизначення значення ключа

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1]; // !!!
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// let ownerEmail = apartment.owner.email;

// // ownerEmail = "new@google.com";

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);
// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);



// 2-й спосіб звернення до елементів об'єкту
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//     tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// console.log(apartment.rating);
// console.log(apartment.owner.name);
// console.log(apartment.price);
// console.log(apartment.tags);


 
// перевизначення заздалегідь невідомого ключа
// let emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",  //  в [] записується змінна
//   [passwordInputName]: "jqueryismyjam",
// };

// console.log("credentials", credentials)

// const key = Object.keys(credentials);
// console.log("key", key[0])  //  перевірка ключів об'єкту


// метод hasOwnProperty
// const obj = {
//   width: 300,
//   height: 200,
//   title: "Menu"
// }

// for (let key in obj) {
//   if(obj.hasOwnProperty(key)){
//     // console.log(`${key}`);
//     console.log(`${key} : ${obj[key]}`)
//   }
// }


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// console.log("keys", Object.keys(apartment));  //  вивід всіх ключів в масив
// console.log("values", Object.values(apartment));  //  вивід всіх значень ключів в масив


// for (const key in apartment) {
//   console.log(key);  //  звернення до назви ключа
//   keys.push(key);

//   console.log(apartment.descr);  //  звернення до значення ключа
//   // console.log(apartment[key]);  //  //  звернення до значення ключа, при умові невідомої назви ключа
//   // console.log(values);  //  виведення масива values
//   // values.push(apartment[key]);  //  додавання невідомого значення ключа в об'єкті apartment (apartment[key])

//   if (key === "price") {  //  зміна певного значення ключа за умови
//     const newSum = apartment[key] * 2;
//     values.push(newSum);
    
//   }
// }
// console.log(keys);
// console.log(values);


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const values = [];
// const keys = Object.keys(apartment);
// console.log(keys); // вивід всього масиву
// for (const key of keys) {
//   console.log(key); // вивід по елементам масиву
//   values.push(apartment[key]);
// }
// console.log(values);


// варіант 1
// function countProps(object) {
//   let propCount = 0;
  
  // for (const key in object) {
  //   if (object.hasOwnProperty(key)) {
  //     propCount += 1;
  //   }
  // }
  // return propCount;

// варіант 2
//   const countPropsSum = Object.keys(object);
//   const values = Object.values(object);
//   console.log(countPropsSum);  //  вивід властивостей 
//   console.log(values);  //  вивід значень властивостей
//   return countPropsSum.length;  //  вивід довжини масиву властивостей (ключів)
// }

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

//  приклад вивід загальної суми значень властивостей
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const SalaryObj = Object.values(salaries);  //  створення масиву значень властивостей
//   console.log("SalaryObj", SalaryObj)
  
//   // for (const key of SalaryObj) {
//     // totalSalary = totalSalary + key;
//   // }
//   return totalSalary;
// }

// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));





// const books = [
//   {title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,},
//   {title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,},
//   {title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,}
// ];

// for (const book of books) {
//   console.log(book); // Об'єкт книги
//   console.log(book.title); // Назва
//   console.log(book.author); // Автор
//   console.log(book.rating); // Рейтинг
// }


// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const key of colors){
//   hexColors.push(key.hex);
//   rgbColors.push(key.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);


// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   let priceSum = null;
//   for (const product of products) {
//     if (product.name === productName) {
//       priceSum = product.price;
//     }
//   }
//   return priceSum;
// }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));


// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const returnMas = [];
 
//   for (const product of products) {
//     const productObj = Object.keys(product);
//     const productVal = Object.values(product);
//     // console.log(productObj);  // перевірка властивості об'єктів
//     // console.log(productVal);   //перевірка свойств властивостей об'єктів
//     for (const key in productObj) {
//       if (productObj[key] === propName) {
//         returnMas.push(productVal[key])
//         }
//       }
//   }
// return returnMas;
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));


// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

  
//   let productSum;
//   const productMas = [];
//   const productPric = [];
//   const productQuan = [];

//   for (const product of products) {
//     productMas.push(product.name);
//     productPric.push(product.price);
//     productQuan.push(product.quantity);
//   }
//   for (const product1 of products) {
//     if (productMas.includes(productName)) {
//       for (const key in productMas) {
//         if (productMas[key] === productName) {
//           productSum = productPric[key] * productQuan[key];
//         }
//       }
//     }
//     else {
//         productSum = `Product ${productName} not found!`;
//         return productSum;
//       }
//     return productSum;
//   }
//   }
  

// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));
// console.log(calculateTotalPrice("Blaster"));


// const obj = {
// 	method(value) {
// 		console.log(`I'm a method with ${value}!`);
// 	}
// };

// obj.method(5); // "I'm a method with 5!"
// obj.method(10); // "I'm a method with 10!"



// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return `List of all available potions`
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`
//   },
// }


// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log(atTheOldToad.addPotion("Power potion"));


// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 }
//   ],
//   getBooks() {
//     return this.books;
//   },
//   addBook(newBook) {
//     this.books.push(newBook);
//   },
// };

// bookShelf.addBook({ title: "Dream Guardian", rating: 9 });
// console.log(bookShelf.getBooks());


// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
//   getAvarageRating() {
//     let totalRating = 0;
//     for (const book of this.books) {
//       totalRating += book.rating;
//     }
//     return totalRating / this.books.length; // ділення
//   },
// };

// console.log(bookShelf.getAvarageRating()); // 7


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let TotalPriceSum = 0;
//     for (const poti of this.potions){
//       TotalPriceSum += poti.price;
//     }
//     return TotalPriceSum;
//   },
// };

// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// console.log(atTheOldToad.getPotions());
// atTheOldToad.addPotion({ name: "Power potion", price: 270 });
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.getTotalPrice());


// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
  
//   changeRating(bookName, newRating) {
//     for (const book of this.books) {
//       // console.log(book.title);  // перевірка до
//       // console.log(book.rating);  // перевірка до
//       if (book.title === bookName) {
//        book.rating = newRating;
//         // console.log(book.rating); // перевірка після
//       };
//     };
//     return this.books;
// 	},
// };

// console.log(bookShelf.changeRating("The Mist", 9));
// console.log(bookShelf.changeRating("The Last Kingdom", 4));



// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (const poti of this.potions) {
//       // console.log(poti);
//       if (poti.name === oldName) {
//         poti.name = newName;
//       }
//     }
//     return this.potions;
//   },
// };

// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));
// console.log(atTheOldToad.updatePotionName("Speed potion", "Polymorth"));


// function add(...args) {
//   let Sum = 0;
//   console.log(args);
//   for (const key in args) {
//     console.log(args[key]);
//     Sum += args[key];
//   };
//   return Sum;
// };

// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));


// function addOverNum(value, ...args) {
//   console.log(value);
//   console.log(args);
//   let Sum = 0;
//   for (const key in args) {
//     if (value < args[key]) {
//       Sum += args[key];
//     }
//   }
//   return Sum;
// }

// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));


// function getExtremeScores(scores) {
//   let best = Math.max(...scores);
//   let worst = Math.min(...scores);
//   // console.log(best);
//   // console.log(worst);
//   const result = { best, worst };
//   return result;
//  }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));


// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);
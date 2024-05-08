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

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1]; // !!!
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;

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
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
// };


const obj = {
  width: 300,
  height: 200,
  title: "Menu"
}

for (let key in obj) {
  if(obj.hasOwnProperty(key)){
    console.log(`${key}`);
    // console.log(`${key} : ${obj[key]}`)
  }
}


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//   // console.log(apartment[key]);
//   keys.push(key);
//   values.push(apartment[key]);
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



// function countProps(object) {
// варіант 1
  // let propCount = 0;
  
  // for (const key in object) {
  //   if (object.hasOwnProperty(key)) {
  //     propCount += 1;
  //   }
  // }
// return propCount; // варіант 1
// варіант 2
//   const countPropsSum = Object.keys(object);
//   const values = Object.values(object);
//   console.log(values);
//   return countPropsSum.length;
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const SalaryObj = Object.values(salaries);
  
//   for (const key of SalaryObj) {
//     totalSalary = totalSalary + key;
//   }
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


function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  const returnMas = [];
 
  for (const product of products) {
    const productObj = Object.keys(product);
    const productVal = Object.values(product);
    // console.log(productObj);  // перевірка властивості об'єктів
    // console.log(productVal);   //перевірка свойств властивостей об'єктів
    for (const key in productObj) {
      if (productObj[key] === propName) {
        returnMas.push(productVal[key])
        }
      }
  }
return returnMas;
}

console.log(getAllPropValues("name"));
console.log(getAllPropValues("quantity"));
console.log(getAllPropValues("price"));
console.log(getAllPropValues("category"));
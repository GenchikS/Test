//  -----   масиви та доступ до елементу масива
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// console.log(firstElement);
// const secondElement = fruits[1];
// console.log(secondElement);
// const lastElement = fruits[3];
// console.log(lastElement);


//  ----    приклад звернення до елементів (перший та останній)
// function getExtremeElements(array) {
//     const getExtremeNew = [array[0], array[array.length - 1]];
//     return getExtremeNew;
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));



//  довжина масиву
// function getOrderQuantity(order) {
//     // console.log(order.length);
//     console.log(order[order.length - 1]);  //  доступ до останнього елементу масива
//     return order.length;
// }
// console.log(getOrderQuantity(["apple", "peach", "pear", "banana"]));
// console.log(getOrderQuantity(["apple", "banana", "pear"]));




// function getLastElementMeta(array) {
//     const getLastElementNew = [array.length, array[array.length - 1]];  //  довжина масиву та останній елемент масиву array[array.length - 1]
//     return getLastElementNew;
// }

// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));
// console.log(getLastElementMeta(["apple", "peach", "pear"]));



//  ----  приклад, як перевизначити елементи масиву  -----
// const planets = ['Earth', 'Mars', 'Venus', 'Uranus'];
// console.log(planets);
// planets[0] = 'Jupiter';
// planets[2] = 'Neptune';
// console.log(planets); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']


//  ----  приклад методу .split
// function transformString(string) {
//     // console.log("arg", arguments);
//  const words = string.split("_");
//  return words.join("-");
// }

// console.log(transformString("user__age")); // "user-age"
// console.log(transformString("price__per___droid")); // "price-per-droid"

// function transformString(string) {
//     // console.log("arg", arguments);
//  const words = string.split(" ");
//  return words.join("");
// }

// console.log(transformString(" user     "), 1); // "user-age"
// console.log(transformString("     price   wwww"), 2); // "price-per-droid"


//  ----  приклад методу .slice, .indexOf, .push
// const arr = ["Gena", "Sergey", "Mikhail Parmatov", "Nikolai"];
// let nameArr = arr.slice(0, 2);
// console.log("nameArr", nameArr);     //  ["Gena", "Sergey"]
// nameArr = arr.slice(0);
// console.log("nameArr", nameArr)   // ["Gena", "Sergey", "Mikhail", "Nikolai"]
// nameArr = arr.slice();
// console.log("nameArr", nameArr);     // ["Gena", "Sergey", "Mikhail", "Nikolai"]
// console.log("nameArr", nameArr[1]);  // Sergey

// console.log("Mikhail Parmatov", arr.indexOf("Mikhail"))  // -1 відсутній
// console.log("Mikhail Parmatov", arr.indexOf("Mikhail Parmatov"))   // індекс 2
// console.log("Mikhail Parmatov", arr[2]);  //  Mikhail Parmatov
// console.log("Mikhail Parmatov", arr[arr.indexOf("Mikhail Parmatov")]);    //  Mikhail Parmatov

// arr.push("Masha", "Dariya");  //  дадасть в кінець масиву
// arr.push("Gena");  //  дадасть в кінець масиву 2-м ім'ям
// console.log("arr", arr);

// const arr = ["Gena", "Sergey", "Mikhail Parmatov", "Nikolai"];
// const numberAll = [];
// function createArrayOfNumbers() {
//     for (let i = 0; i < arr.length; i++){
//         numberAll.push(arr[i]);
//     }
//     console.log(numberAll);
//     return numberAll;
// }

// createArrayOfNumbers()



//  ----  приклад методу .includes
// const arr = ["Gena", "Sergey", "Mikhail Parmatov", "Nikolai"];
// console.log("includ", arr.includes("Gena"));  //  true


// -----  ітерація масивів -----
// const arr = ["Gena", "Sergey", "Mikhail Parmatov", "Nikolai", "Masha", "Dariya"];
// for (let i = 0; i < arr.length; i++){
//     // if (arr[i] === "Sergey" || arr[i] === "Nikolai") {  //  || або 
//     if (arr[i].includes("Sergey") || arr[i].includes("Nikolai")) {  //  одинакове значення, різний запис
//         console.log(`${arr[i]}:`, arr[i]);
//     }
// }


//  -----  приклад перебору масива for of, якщо не потрібен лічильник i -----
// const arr = ["Gena", "Sergey", "Mikhail Parmatov", "Nikolai", "Masha", "Dariya"];
// for (const elem of arr) {
//     if (elem.includes("Sergey") || elem.includes("Nikolai")) {
//         console.log("name:", elem);
//     }
// }









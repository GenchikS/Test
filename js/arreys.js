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



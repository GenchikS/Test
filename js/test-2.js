// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// console.log(firstElement);
// const secondElement = fruits[1];
// console.log(secondElement);
// const lastElement = fruits[3];
// console.log(lastElement);



// function getOrderQuantity(order) {
//     console.log(order.length);
//     // console.log(order[order.length - 1]);
//     return order.length;
// }
// console.log(getOrderQuantity(["apple", "peach", "pear", "banana"]));
// console.log(getOrderQuantity(["apple", "banana", "pear"]));


// function getLastElementMeta(array) {
//     const getLastElementNew = [array.length - 1, array[array.length - 1]];
//     return getLastElementNew;
// }

// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));
// console.log(getLastElementMeta(["apple", "peach", "pear"]));



// function getExtremeElements(array) {
//     const getExtremeNew = [array[0], array[array.length - 1]];
//     return getExtremeNew;
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));


// function getLength(array) {
//     return array.join("").length
// }

// console.log(getLength(["Mango", "hurries", "to", "the", "train"]));
// console.log(getLength(["M", "a", "n", "g", "o"]));



// function calculateEngravingPrice(message, pricePerWord) {
//     // console.log(message.length); //перевірка довжини рядка
//     const messageAll = message.split(" ").length * pricePerWord;
//     return messageAll;
    
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));


// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// console.log(fruits);

// const firstTwoEls = fruits.slice(0, 2);
// console.log(firstTwoEls);
// const nonExtremeEls = fruits.slice(1, -1);
// console.log(nonExtremeEls);
// const lastThreeEls = fruits.slice(-3);
// console.log(lastThreeEls);



// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const allClients = oldClients.concat(newClients);
// console.log(allClients);



// function getSlice(array, value) {
//     // console.log(array.indexOf(value));
//     // const resultWord = array.slice(0, array.indexOf(value) + 1);
//     // console.log(resultWord);
//     const indexWord = array.indexOf(value);
//     return indexWord >= 0 ? array.slice(0, array.indexOf(value) + 1) : [];
// }

// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"));


// function createArrayOfNumbers(min, max) {
//     const numberAll = [];
//     // console.log(min); //перевірка
//     for (let i = min; i <= max; i++){
//         numberAll.push(i);
//     }
//     // console.log(numberAll); //перевірка
//     return numberAll;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));


// function calculateTotalPrice(order) {
//         let orderSum = 0; // винесено для доступу за межі циклу
//     for (let i = 0; i < order.length; i += 1){
//         orderSum = orderSum + order[i];
//         // console.log(orderSum);
//         }
//     return (orderSum);
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));


// function getEvenNumbers(start, end) {
//         const startNumber = [];
//     for (let i = start; i <= end; i += 1){
//         // console.log(start); // початок
//         // console.log(end);  // кінець
//         if (i%2 === 0) {
//             // console.log(i); // перевірка умови 
//             startNumber.push(i);
//         }
//     }
//     return startNumber;
// }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers());


// function checkStorage(storage, item) {
//   if (storage.includes(item.toLowerCase())){
//     return `${item.toLowerCase()} is available to order!`;
//   }
//   else {
//     return `Sorry! We are out of stock!`;
//   }
// }


// console.log(checkStorage(["apple", "plum", "pear"], "plum"));
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));



// function getCommonElements(array1, array2) {
//     let allElement = [];
//     console.log(array1, array2);
//     for (i = 0; i <= array1.length; i += 1){
        
//         if (array2.includes(array1[i])) {
//             allElement.push(array1[i]);
//         }
//     }
//     return allElement;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));


const planets = ["Earth", "Mars", "Venus"];

for (const planet of planets) {
  console.log(planet);
}



// function calculateTotalPrice(order) {
//     let orderSum = 0;
//     for (const orderAll of order) {
//         // console.log(orderAll);
//         orderSum += orderAll; //  orderSum = orderSum + orderAll;
//     }
//     return orderSum;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));


// function createReversedArray() {
//     // console.log(arguments); // перевірка
//     const argumentsAll = Array.from(arguments); //перетворення в масив
//     // console.log(argumentsAll); // перевірка масиву
//     return argumentsAll.toReversed();
// }

// console.log(createReversedArray(12, 85, 37, 4));


// function calculateTax(amount, taxRate = 0.2) {
//   const calculateAll = amount * taxRate;
//     // console.log(arguments);
//     return calculateAll;
// }

// console.log(calculateTax(100, 0.1));
// console.log(calculateTax(100, 0.2));
// console.log(calculateTax(100));

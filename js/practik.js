// let x = 5;
// let y = 10;
// let z = x + y;
// alert(z);

// function createArrayOfNumbers(min, max) {
//     const numberAll = [];
//     // console.log(min); //перевірка
//     for (let i = min; i <= max; i++){
//         numberAll.push(i);
//     }
//     // console.log(numberAll); //перевірка
//     return numberAll;
// }

// alert(createArrayOfNumbers(1, 3));
// alert(createArrayOfNumbers(14, 17));

// let txt = "I can eat bananas all day";
// const a = txt.slice(10, 16);
// console.log(a);

// let txt = "Hello World";
// console.log(txt);
// const txtAll = txt.replace("Hello", "Welcome");
// console.log(txtAll);

// // const cars = ["Volvo", "Jeep", "Mercedes"];
// // alert([...cars]);

// const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
// console.log(fruits.sort()); //['Apple', 'Banana', 'Kiwi', 'Orange']

// const d = new Date();
// console.log(d);
// year = new Date().getFullYear();
// console.log(year);


// const calc = prompt(`Введіть довжину сторони квадрату:`);
// // // console.log(`Сторона : ${calc}см , площа ${(calc*calc).toFixed(2)}см та периметр ${(calc*4).toFixed(2)}см`)
// alert(`Сторона : ${calc}см , площа ${(calc*calc).toFixed(2)}см та периметр ${(calc*4).toFixed(2)}см`)

// function calc(numb) {
//     return alert(`Сторона : ${numb}см , площа ${(numb * numb).toFixed(2)}см та периметр ${(numb * 4).toFixed(2)}см`);
// };

// calc(prompt(`Введіть довжину сторони квадрату:`));


// function inp(a, b) {
//     let result = 0;
//     for (let i = 1; i <= a && i <= b; i += 1)
//         if (a % i === 0 && b % i === 0) {
//             result = i;
//        }
//     return alert(`Найбільший дільник: ${result}`);
// };
// console.log(inp(prompt(`Введіть значення a`), prompt(`Введіть значення b`)));
// // console.log(inp(400,200));


// function numb(a) {
//     const result = [];
//     for (let i = 1; i < a; i += 1) {
//         if (!Number.isInteger(i / 2)) {
//             //   if (i % 2 !== 0 ) {
//             result.push(i);
//         }
//     };
//     return (`Кількість позитивних непарних чисел, менших за число ${a}: ${result.length}`);
// }

// console.log(numb(11));

// function nechet(numb) {
//   let nechNum = [];
//   for (let i = numb - 1; i > 0; i--) {
//     if (i % 2 === 1) {
//       nechNum.push(i);
//     }}
//   console.log("количество положительных нечетных чисел-", nechNum.length);
// }

//  console.log(nechet(1));


// function inp(a, b) {
//     let result = a <= b ? b : a;
//     console.log(result);
//     for (let i = result; i >= result; i += 1)
//         if (i % a === 0 && i % b === 0) {
//             result = i;
//         return alert(`Найменший число на яке ділиться ${a} і ${b}: ${result}`);
//         }
// };

// console.log(inp(4,30));

// варіант 1
// const fruits = ["Apple", "Banana", "Grapes", "Apple", "Apple", "Banana", "Pineapple", "Grapes", "Kiwi", "Apple"];
//     console.log(fruits);
// function fructs(users) {
//     const result = [];
//     for (let i = 0; i < users.length; i++){
//         if (!result.includes(users[i])) {
//             result.push(users[i]);
//         }
//     }
//     return result;
// }

// console.log(fructs(fruits))

// варіант 2
// const fruits = ["Apple", "Banana", "Grapes", "Apple", "Apple", "Banana", "Pineapple", "Grapes", "Kiwi", "Apple"];
//     console.log(fruits);
// const fructs = [];
// fruits.forEach(function (number) {
//     if (!fructs.includes(number)){
//         fructs.push(number)
//     };
// });
//     console.log(fructs);


// const numbers = [5, 10, 15, 20, 25];
// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }

// Перебираючий метод forEach
// numbers.forEach(function (number) {
//   console.log(`value ${number}`);
// });
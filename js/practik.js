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

let txt = "Hello World";
console.log(txt);
const txtAll = txt.replace("Hello", "Welcome");
console.log(txtAll);

// const cars = ["Volvo", "Jeep", "Mercedes"];
// alert([...cars]);

const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
console.log(fruits.sort()); //['Apple', 'Banana', 'Kiwi', 'Orange']

const d = new Date();
console.log(d);
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




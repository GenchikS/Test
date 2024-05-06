
// function getSubscriptionPrice(type) {
//   switch(type){
//     case "starter" :
//         console.log(`0`);
//     break;
//       case `professional`:
//           console.log(`20`);
//     break;
//       case `organization`:
//           console.log(50);
//     break;
//     default: console.log(`Invalid subscription type!`);
//   }
//   return;
// }

// getSubscriptionPrice("professional");
// getSubscriptionPrice("organization");
// getSubscriptionPrice("starter");


    
// function isNumberInRange(a, b, c) {
    
    // console.log("number" >= "start" && "number" <= "end");
    // console.log(c >= a && c <= b);
    // return c >= a && c <= b;
    // return "start" <= "number" && "number" <= "end";
// }

// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));


// function normalizeInput(input, to) {
//     return to === "upper" ? input.toUpperCase() : input.toLowerCase();
// }

// console.log(normalizeInput("This ISN'T SpaM", "upper"));
// console.log(normalizeInput("This ISN'T SpaM", "lower"));
// console.log(normalizeInput("Big SALE", "lower"));
// console.log(normalizeInput("Big SALE", "upper"));


// function checkForName(fullName, firstName) {
//     fullName = fullName.toUpperCase();
//     console.log(fullName);
//     firstName = fullName.includes(firstName.toUpperCase());
//     console.log(firstName);
//     return firstName === true ? true : false;
// }

// console.log(checkForName("Jason Neis", "Jason"));
// console.log(checkForName("Jason Neis", "jAsOn"));
// console.log(checkForName("Jason Neis", "Jacob"));


// function getFileName(file) {
//     const fileTrue = file.indexOf(".");
//     if (fileTrue >= 0) {
//         // console.log(file.slice(0, fileTrue));
//         return file.slice(0, fileTrue);
//         }
//     else if (fileTrue === -1) {
//         // console.log(file);
//         return file;
//     }
// }

// console.log(getFileName("styles.css"));
// console.log(getFileName("app"));

// const input = " JavaScript is awesome!    ";
// const trimmedInput = input.trim();
// console.log(trimmedInput);
// console.log(input);


// варіант 1
// function calculateTotal(number) {
//     let numberTest = 0;
//     let testOff = 0;
//     while (numberTest < number) {
//         numberTest = numberTest + 1;
//         testOff = testOff + numberTest;
// }
//     return testOff;
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(0));
// console.log(calculateTotal(171));
// console.log(calculateTotal(300));

// // варіант 2
// function calculateTotal(number) {
//   let numberTest = 0;
//     for (let i = 0; i <= number; i++){
//     numberTest =  numberTest + i;
//   }
// //   console.log(numberTest);
//   return numberTest;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(0));
// console.log(calculateTotal(171));
// console.log(calculateTotal(300));

// let x = 5;
// console.log(x);// 5
// const b = x++;
// console.log(b);// 5
// console.log(x);// 6  5 + 1 = 6
// const y = ++x;
// console.log(y); // 7 6 + 1 = 7


// const a = prompt("Чи ви готові?")

// function calculateEvenTotal(number) {
//   console.log(number);
//   number = (Math.floor(number / 2)) * 2; // 8/2=4
//   console.log(number);
//  let numberTestData = 0;
//   for (let numberTest = 0; number >= numberTest; numberTest = numberTest + 2) {
//     numberTestData = numberTestData + numberTest;
//   }
//   return numberTestData;
// }

// console.log(calculateEvenTotal(11));
// console.log(calculateEvenTotal(12));
// console.log(calculateEvenTotal(2));
// console.log(calculateEvenTotal(1));
// console.log(calculateEvenTotal(0));
// console.log(calculateEvenTotal(90));


// let start = 6;
// const end = 17;
// let number;

// for (start; start < end; start++){
//     const a = start % 5;
//     if (0 === a) {
//         console.log(start);
//         break;
//     }
// }

// варіант 2
// for (start; start < end; start++){
//     if (Number.isInteger(start / 5)) { 
//     console.log(start);
//         break;
// }
// }





// function findNumber(start, end, divisor) {
//     for (start; start <= end; start++){ 
//         if (Number.isInteger(start / divisor)) {
//             return start;
//         }
        
//     }
// }

// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));
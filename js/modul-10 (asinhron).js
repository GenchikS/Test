// console.log("Start");

// const timerId = setTimeout(() => {
//     console.log("I love async JS!");
//   }, 2000);

// console.log(timerId);


  
// const startBtn = document.querySelector(".js-start");

// startBtn.addEventListener("click", () => {
//   const intervalId = setInterval(() => {
//     console.log(`Interval ID: ${intervalId}, ${Math.random()}`);
//   }, 1000);
// });


// приклад роботи промісу
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// console.log(promise); // Об'єкт промісу



// приклад роботи промісу та методу then
// const isSuccess = true;

// // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// // Registering promise callbacks
// promise.then(
//   value => {
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   error => {
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );


// приклад роботи промісу, методу then, методу catch та методу finally
// const isSuccess = true;
// // const isSuccess = false;  //  спробувати false

// // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// // Registering promise callbacks
// promise
//   .then(value => console.log(value)) // "Success! Value passed to resolve function"
//   .catch(error => console.log(error)) // "Error! Error passed to reject function"
//   .finally(() => console.log("Promise settled")); // "Promise settled"  не приймає жодних аргументів



// приклад роботи промісу, декілька методів then, методу catch та методу finally
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then(value => {
//     console.log(value); // 30
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally");
//   });


// приклади проміксікації
//   const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);
// };

// fetchUserFromServer(
// 	"Mango",
// 	user => console.log(user),
// 	error => console.error(error)
// );


// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);

//   setTimeout(() => {
//     // Change value of isSuccess variable to simulate request status
//     const isSuccess = true;

//     if (isSuccess) {
//       onSuccess("success value");
//     } else {
//       onError("error");
//     }
//   }, 2000);
// };

// fetchUserFromServer(
// 	"Mango",
// 	user => console.log(user),
// 	error => console.error(error)
// );


// const fetchUserFromServer = username => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = true;

//       if (isSuccess) {
//         resolve("success value");  // значенням параметра resolve буде колбек-функція методу then()
//       } else {
//         reject("error");  // значенням параметра reject буде колбек-функція методу catch()
//       }
//     }, 2000);
//   });
// };

// fetchUserFromServer("Mango")
//   .then(user => console.log(user))
//   .catch(error => console.error(error));



//   const makePromise = ({ value, delay, shouldResolve = true }) => {
//   return new Promise((resolve, reject) => {
// 	   setTimeout(() => {
// 				if(shouldResolve) {
// 					resolve(value)
// 				} else {
// 					reject(value)
// 				}
// 			}, delay);
//   });
// };

// makePromise({ value: "A", delay: 1000 })
// 	.then(value => console.log(value)) // "A"
// 	.catch(error => console.log(error));

// makePromise({ value: "B", delay: 3000 })
// 	.then(value => console.log(value)) // "B"
// 	.catch(error => console.log(error));

// makePromise({ value: "C", delay: 2000, shouldResolve: false })
// 	.then(value => console.log(value)) 
// 	.catch(error => console.log(error)); // "C"
// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },

//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };


// console.log(pizzaPalace.order("Smoked"));  //  "Order accepted, preparing «Smoked» pizza"


// const user = {
//   username: "Victor",
//   userFirstName : "Maslov",
//   showName() {
// 		// Віктор біжить швидко, тому що він (this) намагається зловити поїзд.
//     console.log(this.username, this.userFirstName);
//     // console.log(this.userFirstName);
//   },
// };

// user.showName();


// function showThis() {
//   console.log("this in showThis: ", this, this.username);
// }

// const userA = {
//   username: "Poly",
// };

// userA.showContext = showThis;
// // console.log(user.showContext);
// const userB = {
//   username: "Key",
// };

// userB.showContext = showThis;

// // Викликаємо в контексті об'єкта
// userA.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}

// // Викликаємо в глобальному контексті
// // showThis(); // "this in showThis: undefined"
// userB.showContext()

// const object = {
//   message: 'Hello, World',
//   getMessage() {
//     const message = 'Hello, Earth';  // оголошена змінна, а не перевизначення ключа
//     return this.message;
//   },
// };
// console.log(object.getMessage()); //  'Hello, World'


// function greet(name) {
//   console.log(`Hello, ${name}! I am ${this.person}`);
// }

// const person = "John";
// const context = {
//   person: "Alice"
// };

// greet.call(context, "Bob");

// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
// 	room: 27
// };

// const poly = {
//   username: "Poly",
// 	room: 191
// };

// greet.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
// greet.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"



// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
// 	const username = callback();
// 	console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName.bind(customer)); // "Processing an application from Jacob Mercer"


// приклад наслідування прототипів
// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(child);
// console.log(parent);



// const a = 10;
// const b = 23;
// class User {
//   c = a * b;
// };
// const mango = new User();
// console.log(mango); // {}
// const poly = new User();
// console.log(poly); // {}



// class User {
//   constructor(name, email) {
//     console.log(name, email);
//     this.name = name;  //  вивід (name) в об'єкт {Mango} для нових об'єктів
//   }
// }

// const mango = new User("Mango", "mango@mail.com"); // "Mango mango@mail.com"
// console.log(mango); // {}

// приклад різного запиту в один constructor
class Car {
  constructor (brand, model, price){
    this.brand = brand;
    this.model = model;
    this.price = price;
  };
};

console.log(new Car("Audi", "Q3", 36000)); // {brand: "Audi", model: "Q3", price: 36000}
console.log(new Car("BMW", "X5", 58900));  // {brand: "BMW", model: "X5", price: 58900}
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
//     },
// };

// user.showName();


// function showThis() {
//   console.log("this in showThis: ", this, this.username);
// }

// const userA = {
//   username: "Poly",
// };

// userA.showContext = showThis;  // 1.userA скопійовано ф-цію showThis (не визвано, бо () вітсутні)
// // console.log(user.showContext);
// const userB = {
//   username: "Key",
// };

// userB.showContext = showThis;

// // Викликаємо в контексті об'єкта
// userA.showContext(); // this in showThis: {username: "Poly", showContext: ƒ} 2.userA Визвано showContext() (з копією ф-ції showThis), this - відповідає об'єкту який визвав що знаходиться перший зліва(userA)

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



// //---- приклад виклику ф-ції, коли ф-ція являється ключем в об'єкті-----
// const objA = {
//   logCtx() {
//     console.log(this);
//     }
// }

// const objB = {
//   foo: objA.logCtx
// };

// objB.foo(); //  викликая objB, тому this від об'єкту objB


// ----- приклад function declaration -----
// const person = {
//   name: "Alice",
//   hello() {
//     console.log(this);
//     console.log(this.name);
//   }
// }
// person.hello();  //  this посилається на об'єкт який його викликав (person)



// // ----- приклад function expression -----
// const person = {
//   name: "Alice",
//   hello: function () {
//     console.log(this);
//     console.log(this.name);
//   }
// }
// person.hello();  //  this посилається на об'єкт який його викликав (person)


// ----- приклад Arrow function -----
// const person = {
//   name: "Alice",
//   wrapper() {  //  2. this посилається на об'єкт (person) за методом function declaration
//     const hello = () => {  //  this посилається на батьківський об'єкт де його було оголошено (wrapper). Відповідно, батьківський this wrapper => person
//       console.log(this);
//       // console.log(this.name);
//     };
//     hello();
// }
  
// }
// person.wrapper(); // 1. wrapper визначається як function declaration, тому посилається на об'єкт який його викликав (person)


//  приклад 2, коли ф-ція wrapper() оголошена за межами виклику

const hello = () => {  //  ф-ція створена в рамках глобальному контексту. Відповідно і this буде братися з глобального контексту
  console.log(this);
};
   
const person = {
  name: "Alice",
  wrapper() {
    hello() //  виклик глобального контексту => undef
  }
}
  

person.wrapper(); // 1. wrapper визначається як function declaration, тому посилається на об'єкт який його викликав (person)





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
// class Car {
//   // constructor(brand, model, price) {
//     constructor (brand, model, price){
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   };
// };

// console.log(new Car("Audi", "Q3", 36000)); // {brand: "Audi", model: "Q3", price: 36000}
// console.log(new Car("BMW", "X5", 58900));  // {brand: "BMW", model: "X5", price: 58900}



// const userName = prompt(`Введіть своє призвіще (укр. мовою):`);
// const userAll = userName.toLowerCase();
// if (userAll === "городецька") {
//   alert(`${userName} Геннадій вас любить`);
//   const userQs = prompt(`${userName} як ви гадаєте Геннадій любить вас? Ведіть "ТАК" або "НІ"`);
//   const userAll = userQs.toLowerCase();
//   if (userQs === "так") {
//     alert(` Так, ви абсолютно праві!!! Він вас обожнює`)
//   } else {
//     alert(`Здається ${userName} помиляється!!! Передивіться свої погляди))) `)
//   }
// } else {
//   alert(`${userName} Геннадій вас не любить`);
// };


// приклад різного запису аргументу в один constructor
// class Car {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }
//   getPrice(){
//     return this.price;
//   }
//   changePrice(newPrice){
//     this.price = newPrice;
//   }
// }



// class Car {
//     model;
//     price;
//     #brand;
//   constructor(params) {
//     this.#brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }

// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 })) // { model: "Q3", price: 36000 }
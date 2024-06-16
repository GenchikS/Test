// приклад спливання події

// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//   console.log("Parent click handler");
// });

// child.addEventListener("click", () => {
//   console.log("Child click handler");
// });

// descendant.addEventListener("click", () => {
//   console.log("Descendant click handler");
// });


// const parent = document.querySelector("#parent");

// parent.addEventListener("click", (event) => {
//   console.log("event.target: ", event.target);
//   console.log("event.currentTarget: ", event.currentTarget);
// });


// <!-- приклад слухача подій з делегуванням -->
// const box = document.querySelector("div.box");

// box.addEventListener("click", function (event) {
//   console.log(event.target);
// });


// приклад генерації боксів та кольору 
// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");

// colorPalette.addEventListener("click", selectColor);

// делегування 
// function selectColor(event) {
//   if (event.target.nodeName !== "BUTTON") {  //  не дорівнює кнопкі
//     return;
//   }

//   const selectedColor = event.target.dataset.color; 
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// // додаткові ф-ції для візуализація елементів
// createPaletteItems(); 

// function createPaletteItems() {
//   const items = [];   //  створення порожнього массиву
//   for (let i = 0; i < 60; i++) {  //  макс 60 елементів
//     const color = getRandomHexColor();  // присвоєння змінній color значення виклику ф-ції
//     const item = document.createElement("button");  //  створення кнопки button
//     item.type = "button";  //  створення type кнопки button
//     item.dataset.color = color;   //  додавання значення атребуту data з різним кольором
//     // console.log(item.dataset.color);  
//     item.style.backgroundColor = color;  //  присвоєння зміни стилю color
//     item.classList.add("item");  //  додавання класу
//     items.push(item);  //  наповнення масиву
//   }
//   colorPalette.append(...items);  //  додавання всього масиву відразу
// }

// function getRandomHexColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";

//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }

//   return color;
// }


// підключення бібліотеки
console.log(_);
console.log(_.sum([2, 3, 5, 5, 6, 2]));   //  приклад роботи бібліотеки, знаходить загальну суму масиву
console.log(_.shuffle([1, 2, 3, 4]))  //  створює масив перетасованих значень


const instance = basicLightbox.create(`
	<h1>Not closable</h1>
	<p>It's not possible to close this lightbox with a click.</p>
`, {
	closable: false
})

// instance.show();  //  виклик ф-ції
// instance.show(() => console.log('lightbox now visible')); //  виклик ф-ції з виводом тексту

// const buttonClick = document.querySelector(`.button-click`);  //  достукалися до кнопки

//  прослуховування кліку та стрілочна ф-ція виклику бібліотеки
// buttonClick.addEventListener(`click`, () => {  
//     instance.close(() => console.log('lightbox not visible anymore'))
// });

// прослуховування кліку звичайна ф-ція виклику бібліотеки
// buttonClick.addEventListener(`click`, closeInstance);

// function closeInstance(){
//     console.log('lightbox now close');
//     return instance.close()
// }

// виклик бібліотеки
// instance.close(() => console.log('lightbox not visible anymore'))  //  закривання тексту стрілочною ф-цією


// звичайний приклад об'єкту
// const user = { 
// 	name: "Jacob", 
// 	age: 32 
// };

// console.log(user.name); // Jacob
// console.log(user.age); // 32

// приклад деструкторізації об'єкту
// const user = { 
// 	name: "Jacob", 
// 	age: 32 
// };

// const { name, age } = user;
// console.log(name); // Jacob
// console.log(age); // 32

// без деструктурізації
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: false,// true,  
//     rating: 8.38,
//   };
  
//   const accessType = book.isPublic ? "pulbic" : "private";  //  приклад тернарного оператора на true. Якщо true, то виконується "pulbic"
//   const message = `Book ${book.title} by author ${book.author} with rating ${book.rating} is in ${accessType} access!`;
// console.log(accessType);
// console.log(message)

// Деструктурізація
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
//   // Деструктуризуємо
//   const { title, author, isPublic, rating } = book;
  
//   // Використовуємо
//   const accessType = isPublic ? "pulbic" : "private";
//   const message = `Book ${title} by author ${author} with rating ${rating} is in ${accessType} access!`;
//   console.log(accessType);
// console.log(message)
// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.
// */

// const refs = {
//     title: document.querySelector(`.taskTitle`),
//     passwordInp: document.querySelector(`#passwordInput`),
//     passwordBut: document.querySelector(`#passwordButton`)
// }

// refs.passwordBut.addEventListener(`click`, onpasswordButClick);

// function onpasswordButClick() {
//     if ()

//     refs.title.style.display = `none`;
//     refs. passwordBut.textContent = `Розкрити`;

// }


// При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
// За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
// інформацією про те, яка кнопка була натиснута скільки разів.


const refs = {
    statList: document.querySelector(`.statList`),  //  загальний батько кнопок
    resultButton: document.querySelector(`#resultBatton`),
    resultSection: document.querySelector(`#resultSection`)
}

let totalSum = 0;
const clickStat = {};

refs.statList.addEventListener(`click`, onStatlistButton);

function onStatlistButton(event) {
    const number = Number(event.target.dataset.number);
    totalSum += number;
   
clickStat[event.target.textContent] = (clickStat[event.target.textContent] поставити або 0) + 1;
console.log(totalSum)
console.log(clickStat) 
}


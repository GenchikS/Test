const LS_KEY = `Kharkov`;
const arr = [`Alex`, `Nik`, `Gen`];  //  значення масив

localStorage.setItem(LS_KEY, JSON.stringify(arr));

const secur = localStorage.getItem(LS_KEY);
console.log(`secur`, JSON.parse(secur))


const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem("settings", JSON.stringify(settings));  //  створення LS з ключем ("settings")

const settingsObj = localStorage.getItem("settings");  //  отрімання LS з ключем ("settings"), string
console.log(`settingsObj`,settingsObj)
const settingsPars = JSON.parse(settingsObj)  //  отримання з string змінної settingsObj об'єкт з значеннями

console.log(`settingsPars`, settingsPars);




const form = document.querySelector(".feedback-form");
const localStorageKeyUser = "Kharkiv";
const textarea = form.elements.message;  //  присвоєння тегу textarea введенин данних

textarea.value = localStorage.getItem(localStorageKeyUser) ?? "";  //  присвоєння textarea.value значення ключа, якщо такого ключа немає, то вважати що він пустий ("")
const textareaAll = textarea.value;
console.log(`textareaAll`, textareaAll)

form.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKeyUser, evt.target.value);
});

form.addEventListener("submit", evt => {
    evt.preventDefault();
    localStorage.setItem(localStorageKeyUser, evt.target.elements.message.value);
    // console.log(evt.target.elements.message.value);
    // localStorage.removeItem(localStorageKeyUser);  //   видалення вмісту LS
form.reset();  //  скидання введеного тексту в form
})

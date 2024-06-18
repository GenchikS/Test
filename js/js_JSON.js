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


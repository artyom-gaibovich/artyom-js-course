/*

Создание массива  (2 способа)
const myArray = new Array(1, 2, 3, 4, 5);

const emptyArray = new Array(10);
emptyArray.fill(1, 5, 10);

const myArrayUseFromMethod = Array.from({ length: 4 }, (elem, index) => index);
console.log(myArrayUseFromMethod);

*/

const myName = `Иван Иванов`;

const arrNames = ["Grisha", "Egor"];

console.log(myName);
console.log(myName[0]);
console.log(myName.length);
console.log(myName.lastIndexOf("И"));
console.log(myName.includes("Иван"));

console.log(myName.slice(0, 5));

const newMyName = `Игорь Алексеевич "Лысый" Иванов`;

const name = ``;
const surname = ``;

const emojiiString = `Vasilinka`;

console.log(emojiiString[2]);

// 1.
var num = 10;
if (true) {
    var num = 20; //
}
console.log(num); // Ожидаем 10, но получаем 20

// 2.
let str = "Hello";
if (true) {
    let str = "World";
}
console.log(str); //

// 3.
const a = 5;
a = 10;
console.log(a); // Возникла ошибка

// 4.
let x = "5";
let y = 10;
let result = x + y;
console.log(result); // Ожидаем 15, но получаем "510"

// 5.
let z;
let w = null;

console.log(z == w);
console.log(typeof z); // Ожидаем "undefined"
console.log(typeof w); // Ожидаем "object"

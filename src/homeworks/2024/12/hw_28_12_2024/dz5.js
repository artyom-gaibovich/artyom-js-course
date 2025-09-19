//Дано число 12345. Найдите сумму цифр этого числа.
//Не могу решить
//let a = 12345;
//let sum = 0;
//
// for (let i = 0; i < 6; i++) {
//    sum+=
//}
//console.log(sum);

// 1) способ решения

/*
let someNumber = 111111111111111111111111;
let lastDigit = someNumber % 10;
let sumDigits = 0;
while (someNumber > 0) {
    sumDigits += lastDigit;
    someNumber = Math.floor(someNumber / 10);
    lastDigit = someNumber % 10;
}

console.log(sumDigits);*/


// 2) способ решения

let someNumber = 1234567;

let someNumberTransformedToString = String(someNumber);
let sumDigits = 0;
for (const char of someNumberTransformedToString) {
    sumDigits += Number(char);
}

console.log(sumDigits);
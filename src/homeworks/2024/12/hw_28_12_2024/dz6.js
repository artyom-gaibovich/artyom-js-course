//№6
//Дано число 12345. Найдите произведение цифр этого числа.


let someNumber = 12345;

let someNumberTransformedToString = String(someNumber);
let multDigits = 1;
for (const char of someNumberTransformedToString) {
    multDigits *= Number(char);
}

console.log(multDigits);
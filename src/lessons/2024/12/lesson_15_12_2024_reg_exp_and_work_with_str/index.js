// Запишите в переменную a число 1.5, а в переменную b - число 0.75.
// Найдите сумму значений этих переменных и выведите ее на экран.

// const a = 1.5;
// const b = 0.75;
//
// console.log(a + b);


// Остаток от деления

/*
let a = 13;
let b = 5;

console.log(a % b);

let str = `${a} % ${b} = ${a % b}`;
console.log(str);

*/


// Создайте переменную с текстом 'java' и переменную с текстом 'script'.
// С помощью этих переменных и операции сложения строк выведите на экран строку 'javascript'.

/*

const a = 'java';
const b = 'script';

console.log(a + b)

*/

//Длина строки в JavaScript

/*
let strExample = 'Hello world ! '
*/

// Выделение чисел в JavaScript


/*
const inputStr = '40.111px;'

const valuePadding = parseInt(inputStr);
const valuePadding2 = parseFloat(inputStr);


console.log(valuePadding);
console.log(valuePadding2);
*/

// Задача:
//Дана переменная со значением '5.5px' и переменная со значением '6.25px'
//Найдите сумму пикселей из значений этих переменных и выведите ее на экран.

const first = '5.5px       ';
const second = '6.25px';

const firstFloat = parseFloat(first);
const secondFloat = parseFloat(second);


const cleanStr = Number(second.replace(/[^0-9.]/g, ''));

console.log(cleanStr);


// Метод .replace()

/*

const inputStr = 'Hello Masha, Masha!!!'

const replacedStr = inputStr.replace('Masha', 'Grisha')

const replacedStrAll = inputStr.replace(/Masha/g, 'Grisha');


console.log(replacedStrAll)
*/


// Преобразование к стркое:
/*

const inputVar = false;

const inputStr = String(false);

console.log(inputVar, typeof inputVar);
console.log(inputStr, typeof inputStr);
*/


//Преобразование к логическому типу в JavaScript
/*


console.log(Boolean(0));          // false
console.log(Boolean(-0));         // false
console.log(Boolean(+0));         // false
console.log(Boolean(null));       // false
console.log(Boolean(false));      // false
console.log(Boolean(NaN));        // false
console.log(Boolean(undefined));  // false
console.log(Boolean(''));         // false


console.log(Boolean('0'));         // true
console.log(Boolean('false'));     // true
console.log(Boolean('NaN'));       // true
console.log(Boolean('null'));      // true
console.log(Boolean('undefined')); // true


console.log(Boolean(-1));          // true
console.log(Boolean(Infinity));    // true
console.log(Boolean(-Infinity));   // true


let test = Boolean(3);
*/


// Получение символов строки на JavaScript

/*
let str = 'Hello world!';


let reverseStr = ''
for (let i = str.length - 1; i >= 0; i--) {
    reverseStr = reverseStr + str[i]
}


console.log(reverseStr)*/

// Неизменяемость строк в JavaScript

/*let str = 'abcde';
str[0] = '!';*/


// Последний сивол строки
/*
let str = 'A';

console.log('Длина строки: ', str.length);
console.log('Последний символ : ', str[str.length - 1]);*/

// Дана строка '12345'. Найдите сумму цифр этой строки.

const inputStr = '12345'
//const res = Number(inputStr[0]) + Number(inputStr[0]) + Number(inputStr[1]) + Number(inputStr[2]) + Number(inputStr[3]) + Number(inputStr[4])

let sum = 0;
for (let i = 0; i < inputStr.length - 1; i++) {
    sum += Number(inputStr[i]);
}
console.log(sum);
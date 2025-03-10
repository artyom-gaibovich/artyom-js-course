
let firstValue = 1000;
let secondValue = 5000;




const dateTimeRegex = /g/;

function isValidDateTime(dateTimeString) {
    return dateTimeRegex.test(dateTimeString);
}

console.log(isValidDateTime('2023')); // true
console.log(isValidDateTime('2023-04-26T12:34:56.789+02:00')); // true
console.log(isValidDateTime('2023-04-26T12:34:56-05:00')); // true
console.log(isValidDateTime('2023-04-26T12:34:56-05:00'));





let undefVar = console.log('res');

console.log(undefVar, 'here');


// Задача 1, что будет напечатно в результате ?


// Задача 2, что будет напечатно в результате ?
// console.log('____X_____'.repeat(10));



// Задача 3: Работа с строками
//
//     Создайте две переменные со строками: одна в одинарных кавычках,
//     другая в двойных. Объедините их в одну строку
//     и выведите результат в консоль.
//     Создайте переменную с многострочным текстом
//     (используя шаблонные строки) и выведите ее в консоль.


// Задача
// Output:
// Объединённая строка: Привет, как дела?
// Многострочный текст:
// Привет!
// Как дела?


let textNumber = 1.100220020;


console.log(Math.round(textNumber));


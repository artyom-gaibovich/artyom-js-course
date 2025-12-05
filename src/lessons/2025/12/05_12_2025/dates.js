
// Создание дат (если не передаем – текущая дата будет)
const date = new Date()

console.log(date)


// 2. Создание даты из строки

console.log(new Date('01.01.2023'))


// конструктор Date может принимать разные форматы:

new Date("2023-02-01")
new Date("02/03/2023")
new Date("03.03.2023 10:20:30")


// ISO YYYY-MM-DD — лучший вариант.


console.log(new Date("Янввdddарь 2021233")) // → Invalid Date



/**
 * 3. Создание даты из набора чисел
 * new Date(year, month, day, hours, minutes, seconds, ms)
 *
 */

console.log(new Date(2024, 10, 20));
new Date(2024, 11, 31)

new Date(2024, 0, 51)


/**
 * 4. Создание даты через timestamp
 * Можно передать количество миллисекунд с 1 января 1970 года (Unix time):
 *
 */

console.log(new Date(0))


// Можно использовать статический метод

const ts = Date.now();

console.log(new Date(ts))


/**
 * 5. Методы для получения частей даты
 */

const now = new Date();
console.log(now.getMonth())   // год
now.getMonth()      // месяц (0–11)
now.getDate()       // день месяца
now.getDay()        // день недели (0 — воскресенье)


now.getHours()
now.getMinutes()
now.getSeconds()
now.getMilliseconds()

now.getTime() // миллисекунды с 1970 года


//6. Изменение даты

now.setFullYear(25);
now.setMonth(10);      // ноябрь
now.setMinutes(5);
now.setSeconds(10);


console.log(now)


//7. Использование даты для вычислений
const date1 = new Date(2024, 0, 24); // 24 января
date1.setDate(date1.getDate() + 9999);

console.log(date1)
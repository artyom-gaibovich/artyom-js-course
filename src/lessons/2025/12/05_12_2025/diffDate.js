/**
 *
 * 1. Почему сравнение дат работает так просто?
 *
 *
 * >
 * <
 * >=
 * <=
 *
 * прекрасно работают с датами.
 */


const first = new Date(2024, 10, 4);
const second = new Date(2024, 10, 3);

console.log(first > second);  // true
console.log(first < second);  // false


console.log(first.getTime() > second.getTime());

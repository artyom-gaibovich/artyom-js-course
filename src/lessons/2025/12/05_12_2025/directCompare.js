/**
 * 3. Прямое сравнение равенства — НЕ работает
 */

const a = new Date(2024, 5, 1);
const b = new Date(2024, 5, 1);

console.log(a == b);  // false
console.log(a === b); // false


/**
 * 4. Как правильно сравнивать даты на равенство
 *
 */

console.log(a.getTime() === b.getTime()); // true
console.log(Number(a) === Number(b)); // true
console.log(+a === +b); // true


/**
 * 5. Когда можно сравнивать даты напрямую?
 *
 * Для операторов >, <, >=, <= можно делать так:
 * if (first >=, <, >, <= second) { ... }
 */
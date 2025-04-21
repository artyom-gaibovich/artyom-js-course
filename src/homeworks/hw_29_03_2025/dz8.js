/*8. reduce: Дан массив строк ["apple", "banana", "cherry", "date"].
Создай объект, где ключи — слова, а значения — их длины (пример: `{ apple: 5, banana: 6 }`). */

let strArr = ["apple", "banana", "cherry", "date"];
let obj = strArr.reduce(function (acc, cur, index) {
    acc[cur] = cur.length
    return acc;
}, {})





console.log();

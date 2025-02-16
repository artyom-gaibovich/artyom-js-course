/*Задание 5:
Реализуй генерацию публичного ключа по схеме, аналогичной 2^x mod p.
    p — простое число (например, 11).
    g — основание (например, 2).
    x — секретный ключ (рандомное число).

Функция generatePublicKey(x, g, p) должна возвращать публичный ключ:
*/

function generatePublicKey(x, g, p){
    return ;
}

const p = 11
const g = 2
const x = Math.random()

console.log("Публичный ключ:", generatePublicKey(x, g, p))
console.log("Секретный ключ (x):", x);
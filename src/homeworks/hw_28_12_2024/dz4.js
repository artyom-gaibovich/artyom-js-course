//№4
// Дана строка '12345'. Найдите сумму цифр этой строки.

let a = "12345";
let sum = 0
for (let i = 0; i < a.length; i++) {
    sum+= Number(a[i])
}
console.log(sum)
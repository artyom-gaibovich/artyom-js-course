//6. reduce: Дан массив чисел [10, 20, 30, 40, 50]. Найди сумму всех элементов.
let arrNum = [10, 20, 30, 40, 50];
let sum = arrNum.reduce((acc, cur) => acc + cur, 0);
console.log(sum);
//6. reduce: Дан массив чисел [10, 20, 30, 40, 50]. Найди сумму всех элементов.
let arrNum = [10, 20, 30, 40, 50];
let sum = arrNum.reduce(function (acc, curr, index) {
    return acc + curr
}, 5);
console.log(sum);
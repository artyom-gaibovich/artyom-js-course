//7. reduce: В том же массиве чисел найди среднее арифметическое
let arrNum = [10, 20, 30, 40, 50];
let sum = arrNum.reduce((acc, cur) => acc + cur , 0);
let arithmeticMean = sum / arrNum.length
console.log(arithmeticMean);
//1. Найти среднее значение последовательность числа с помощью reduce
const data = [230, 50, 80, 999];
const midNum = data.reduce((acc, cur) => acc += cur) / data.length;

console.log(midNum);


function someFunc2(arr, value) {
    if (arr.find((el) => el === value)) {
        return true;
    }
    return false;
}

console.log(someFunc2([1, 2, 3, 4, 5], 1))
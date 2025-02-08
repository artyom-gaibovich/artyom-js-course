//1)Напиши функцию calculate, которая принимает три аргумента: два числа и строку, обозначающую операцию ("add", "subtract", "multiply", "divide"). Функция должна выполнять соответствующую операцию и возвращать результат.

function calculate (Number1, Number2, operator) {
    if (operator === 'add')
        return Number1+Number2;
    else if (operator === 'subtract')
        return Number1-Number2;
    else if (operator === 'multiply')
        return Number1*Number2;
    else if (operator === 'divide')
        return Number1/Number2;
    else
        return "invalid operator";
}


console.log(calculate(10, 5, "add")); // 15
console.log(calculate(10, 5, "subtract")); // 5
console.log(calculate(10, 5, "multiply")); // 50
console.log(calculate(10, 5, "divide")); // 2
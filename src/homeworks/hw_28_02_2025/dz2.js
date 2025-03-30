//2) Сделай функцию, которая параметром будет принимать число и удалять из него нули.

function removeZeros(num) {return Number(num.toString().split("0").join(""));
}

console.log(removeZeros(1000));
console.log(removeZeros(20000000000));
console.log(removeZeros(5325400000000));
console.log(removeZeros(30000456));
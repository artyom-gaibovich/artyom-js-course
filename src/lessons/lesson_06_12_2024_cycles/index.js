

// For


// 1 - иницилазиация счетчика,
// 2-условие выхода из цикла,
// 3 - увелечение/уменьшгение счетчиак


/*for (let j = 0; j < 10; j++) {
    console.log(j);
}*/

// While

/*let x = 0;
while(x < 10) {
    x++;
}*/

// Инкремент и декремент

// По сути, x++ это тоже самое, что и x = x + 1 (инкремент)
// По сути, x-- это тоже самое, что и x = x - 1 (декремент)
// По сути, x+=10000 это тоже самое, что и x = x + 10000
// По сути, x-=10000 это тоже самое, что и x = x - 10000


// Разница между операором = и == и ===

// Оператор присваивание это =
let firstValue = 1000;

// == Это оператор проверки по значению, но не по типу !
if (1000 == '1000') {
    console.log('Это правда!!!!')
}
// === Это оператор проверки по значению, и по типу !
if (1000 === '1000') {
    console.log('Это правда!!!!')
}


// Операция % это взятие остатка от числа



// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 (% 5)
//


var a = 19;
var b = 5;

var quotient = Math.floor(a / b);
var res = a / b;
console.log(quotient);
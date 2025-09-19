const someObject = {a: 1, b: 2, c: 3};


/**
 * Итерируемся по ключам у объекта
 */
for (let key in someObject) {
    console.log(key, someObject[key]);
}


/**
 * Проверяем наличие ключа в объекте
 * @type {boolean}
 */

/**
 * 1 вариант
 * obj.hasOwnProperty('foo')
 */
console.log(someObject.hasOwnProperty('a'))

/**
 * 2 вариант
 * оператор in
 */
console.log('_____' in someObject)


const someObjectNew = {a: 1, b: 2, c: 3};

delete someObjectNew['a'];

console.log(someObjectNew);

/**
 * Типизация
 */




let objOld = {x: 1, y: 2, z: 3};
console.log( typeof objOld['x'] );

/**
 * Проверка на массив
 */

const arrayMy = [1,2,3,4,5];
const variable = '12345'
const res = Array.isArray(variable)


console.log(res);

// number, string, boolean, bigint, undefined, null, NaN, symbol
//
//
const user = {
    age: 10,
    name: null
}




const key = 1

    /**
     <number, string>
     <number, number>
     <string, array>     *
     */


let objNew = {x: 1, y: 2, z: 3};

console.log(objNew['x']);

const x = 'x'
const y = 'y'
let obj = {x: 1, y: 2, z: 3};
let sum = obj[x] + obj[y] + obj[x];







const lengthCalc = Object.entries({x: 1, y: 2, z: 3}).length

/**
 * entries -> массив (ключи, значения)
 * keys -> массив (ключи)
 * values -> массив (значения)
 * */
//




const number = 10

if (number > 1) {
    console.log('number is greater than 1')
} else if (number > 999) {
    console.log('number is greater than 2')
} else if (number > 9) {
    console.log('number is greater than 10')
}


let test1 = '3';
let test2 = '3';




num1 = 10
num2 = 55

if (!(num1 >= 0 || num2 <= 10)) {
    console.log('+++');
} else {
    console.log('---');
}





function calculatePositionSize(
    deposit,
    riskPercentage,
    entryPrice,
    stopLossPrice,
    leverage
) {
    const riskAmount = (deposit * riskPercentage) / 100;
    const stopLossSize = entryPrice - stopLossPrice;
    const stopLossPercentage = (stopLossSize / stopLossPrice) * 100;

    const positionSize = riskAmount / (stopLossPercentage / 100);
    const userFundsInTrade = positionSize / leverage;

    console.log(`Risk Amount: ${riskAmount.toFixed(2)}$`);
    console.log(`Stop Loss Size: ${stopLossSize.toFixed(4)}`);
    console.log(`Stop Loss Percentage: ${stopLossPercentage.toFixed(2)}%`);
    console.log(`Position Size: ${positionSize.toFixed(2)}$`);
    console.log(`User Funds in Trade: ${userFundsInTrade.toFixed(2)}$`);

    return positionSize;
}

const deposit = 100;
const riskPercentage = 2;
const entryPrice = 5.418;
const stopLossPrice = 5.36;
const leverage = 10;

calculatePositionSize(deposit, riskPercentage, entryPrice, stopLossPrice, leverage);

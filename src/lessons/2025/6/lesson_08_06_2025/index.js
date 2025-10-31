function calculator(firstNum, secondNum, operation) {
    const operations = new Map([
        ['add', (a, b) => a + b],
        ['subtract', (a, b) => a - b],
        ['multiply', (a, b) => a * b],
        ['divide', (a, b) => a / b],
        ['new_div', (a, b) => a / b ** 1000 + 1000],
    ])
    const currentOperation = operations.get(operation)
    if (!currentOperation) {
        throw new Error(`${operation} данная операция отствутет!`);
    }
    return currentOperation(firstNum, secondNum);

}


calculator(10, 20, 'subtract')
calculator(10, 20, 'add')


// Пример обычной map


const mapNamesToAge = new Map([
    ['artyom', 22],
    ['grisha', 95],
    ['egor', 15],
])


// Пример мэпы с функциями

const mapAnimalsToFunc = new Map([
    ['dog', () => 'Лаяет!'],
    ['cat', () => 'Мяу мяу!'],
    ['fish', () => 'Бульк бульк!'],
])


// Задача с банком

// Должны быть:
// balance
// deposit увеличивает баланс
// withDraw уменьшает баланс (нельзя уйти в минус)
// getBalance(возвращает текущий баланс)


const bankAccount = {
    balance: 0,
    deposit: (function () {
        this.balance += 1;
    }),
    withDraw: function () {
        if (this.balance > 0) this.balance -= 1;
    },
    getBalance: function () {
        return this.balance;
    }

}

console.log(bankAccount.getBalance())

console.log(bankAccount.balance)


// Шифрование

// A,B,C,D,E -> 0,1,2,3,4

// y = x^2 (не одностороняя функция)
// y = x^2 mod 11 (пример односторонней функции)


// Alice, Bob (они хотят шифроваться)
// Eve (это третья сторона)

// 1) Alice и Bob они придумаывают числа(простые), которые является секртеными ключами!
// Ни в коем случае нельзя ими делится (x_a, x_b секретные ключи)!
// x_a = 5, x_b = 7

// Они договариваются об общей односторонней функции
// к примеру возьмем y = 2^x mod 7

// Далее Алиса и Боб вычисляют публичны ключи, по этой односторонней функции
// y_a = 2^5 mod 7 = 4
// y_b = 2^7 mod 7 = 2

// Eve знает y_a, y_b, y = 2^x mod 7 но не знает x_a, x_b

// Алиса вычисляет общий секретный ключ:
// K_a = y_b^x_a mod 7 = 2^5 mod 7 = 4

// Боб вычисляет общий секретный ключ:
// K_b = y_a^x_b mod 7 = 4^7 mod 7 = 4

// K_ab = 2^x_a*x_b mod 7 = 4

// Eve, чтобы взломать секретные ключи алисы и боба, ей нужно решить уравнение:

/**
 * /kpi_data/11/?where={region: "Moscow"}
 * это вспомогательный запрос:
 * select distinct meta_code from backend."IndicatorsMetadata" where kpi_id = '11' (этот запрос к примеру отдает:
 * FREQ, CONSUMPTION_CATEGORY, INDICATOR_TYPE, DATASOURCE, REGION
 *
 * и в резулььатте мы должны получить оыщт
 * "fields:" ["lang", "title", "dynamic_type", "unit_measure", "freq", "group", "period", "value"]
 * "data" : [
 *  ["ru", "Динамика цен", "Россия", "Первичный рынок", "Рынок", "Недвижимость", "Месяц", "2024-03-01", "69.10"], *
 *   ["ru", "Динамика цен", "Зажопинск", "Первичный рынок", "Рынок", "Недвижимость", "Месяц", "2024-01-01", "42.10"],
 *
 *
 *
 */

// K_a = K_b

// 2^x_a mod 7 == 4^x_b mod 7

for (let x_a = 0; x_a < 100; x_a++) {
    for (let x_b = 0; x_b < 100; x_b++) {
        if (Math.pow(2, x_a) % 7 === Math.pow(4, x_b) % 7) {
            console.log(x_a, x_b)
        }
    }
}


const cities = new Map([['Москва', 19999]])




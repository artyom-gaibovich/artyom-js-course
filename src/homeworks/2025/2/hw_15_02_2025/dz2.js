/*Задание 2:
Создай Map, который сопоставляет названия стран и их валюты. Реализуй функцию, которая принимает название страны и возвращает валюту. Если страна отсутствует в Map, функция должна возвращать "Валюта не найдена".
*/

const countryAndCurrencies = new Map([
    ["Russia", 'RUB'],
    ["United States", 'USD'],
    ["Germany", 'EUR']

]);

function getCurrency(country) {
    if (countryAndCurrencies.has(country)) {
        return countryAndCurrencies.get(country);
    }
    return "Валюта не найдена";

}

console.log(getCurrency("Russia"));
console.log(getCurrency("United States"));
console.log(getCurrency("Germany"));
console.log(getCurrency("Spain"));


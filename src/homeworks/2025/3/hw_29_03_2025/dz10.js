/*10. Комбинированная задача:
Дан массив транзакций:
- Разгладь массив (если он вложенный).
- Найди первую транзакцию с category === "food".
- Посчитай общую сумму всех amount.
- Посчитай сумму только транзакций с category === "food".*/

const transactionsArr = [
    {id: 1, amount: 50, category: "food"},
    {id: 2, amount: 100, category: "transport"},
    {id: 3, amount: 150, category: "food"},
    {id: 4, amount: 200, category: "entertainment"}
]



const user = {
    name: 'Vas',
    age: 15,
    greet() {
        console.log('Привет!', this.name);
    },
};


function flattenArray(arr, depth) {
    return transactionsArr.flat(depth);
}



console.log(flattenArray(transactionsArr, 1));
const searchCategory = transactionsArr.find(x => x.category === "food");
console.log(searchCategory);
const sumArr = transactionsArr.reduce((acc, {amount, category}) => category === "food" ? acc + amount : acc, 0)
console.log(sumArr);

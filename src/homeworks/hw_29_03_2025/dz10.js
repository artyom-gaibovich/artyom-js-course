/*10. Комбинированная задача:
Дан массив транзакций:
- Разгладь массив (если он вложенный).
- Найди первую транзакцию с category === "food".
- Посчитай общую сумму всех amount.
- Посчитай сумму только транзакций с category === "food".*/

const transactionsArr = [
    { id: 1, amount: 50, category: "food" },
    { id: 2, amount: 100, category: "transport" },
    { id: 3, amount: 150, category: "food" },
    { id: 4, amount: 200, category: "entertainment" }
]
function flattenArray(arr, depth){
    return transactionsArr.flat(depth);
}
console.log(flattenArray(transactionsArr, 1));
const searchCategory = transactionsArr.find(x => x.category === "food");
console.log(searchCategory);
const sumArr = transactionsArr.reduce((acc, {amount}) => acc + amount, 0)
console.log(sumArr);

const userToFind = ["User 1_A", "User 2_A"];
const allUsers = ["User 1_A", "User 2_A", "User 3", "User 4", "User 5"];

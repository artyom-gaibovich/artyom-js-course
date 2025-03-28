//4. findIndex: В том же массиве пользователей найди индекс первого, у кого age > 25
const pepArr = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 20 }
]
const searchSomeone = pepArr.find(x => x.age > 25);
console.log(searchSomeone);
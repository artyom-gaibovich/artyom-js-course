/*3. find: Дан массив пользователей:
[
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 20 }
]
Найди объект, где name === "Bob".*/

const pepArr = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 20 }
]
const searchSomeone = pepArr.find(x => x.name === "Bob");
console.log(searchSomeone);


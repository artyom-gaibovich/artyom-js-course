//1. Напиши функцию generateTable, которая принимает массив объектов (например, пользователей)
// и возвращает HTML-таблицу в виде строки.
/*
Возвращает:
"<table>...</table>"
*/
function generateTable(data) {
    let rows = data.map(obj =>
        `<tr>${Object.values(obj).map(val => `<td>${val}</td>`).join('')}</tr>`
    ).join('');

    let headers = Object.keys(data[0])
        .map(key => `<th>${key}</th>`).join('');

    return `<table><tr>${headers}</tr>${rows}</table>`;
}

const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 }
];

console.log(generateTable(users));
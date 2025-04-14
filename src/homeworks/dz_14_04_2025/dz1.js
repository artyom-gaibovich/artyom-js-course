//1. Напиши функцию generateTable, которая принимает массив объектов (например, пользователей)
// и возвращает HTML-таблицу в виде строки.

const users = [
	{ id: 1, name: 'Alice', age: 25 },
	{ id: 2, name: 'Bob', age: 30 },
	// <tr><td>1</td>Alice<td></td></tr>,
	// <tr><td>2</td>Bob<td></td></tr>
];

/*
Возвращает:
"<table>...</table>"
*/

function generateTable(usersData) {
	if (!usersData) throw new Error('No users found.');

	const tableHeaders = `<tr>
<th>ID</th>
<th>Name</th>
<th>Age</th>
</tr>`;

	const tableDataStrReduce = usersData
		.map(({ id, name, age }) => `<tr><td>${id}</td><td>${name}</td><td>${age}</td></tr>`)
		.reduce((acc, cur) => acc + cur, '');
	return `<table>${tableHeaders}${tableDataStrReduce}</table>`;
}

console.log(generateTable(users));

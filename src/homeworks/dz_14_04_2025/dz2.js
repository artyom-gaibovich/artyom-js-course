const users = [
	{ id: 1, name: 'Alice', age: 25, isActive: true },
	{ id: 2, name: 'Bob', age: 30, isActive: false },
];



function sortByProperty(arr, property) {
	return arr.sort((a, b) => {
		return a[property] > b[property] ? 1 : -1;
	});
}


console.log(sortByProperty(users, 'name'));


const cacheMap = new Map()


function getData(id) {

	if (cacheMap.has(id)) {
		return Promise.resolve(cacheMap.get(id))
	}

	return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
}


getData(1)
	.then(r => r.json()).then((data) => {
		cacheMap.set(data.id, data)


	const result = getData(1).then((data) => {
		console.log(data)
	});

		console.log("")


});


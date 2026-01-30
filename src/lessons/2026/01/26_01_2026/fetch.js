
/**
 * fetch — современный способ получения данных.
 * Он всегда возвращает Promise.
 *
 */


/**
 * response.json() тоже возвращает Promise
 */


const responsePromise = fetch("https://jsonplaceholder.typicode.com/todos231")


responsePromise.then(response => {
	console.log(response.status)
	if (!response.ok) {
		throw new Error("Не найдено 404")
	}

	return response.json()
})
	.then((data) => {
		console.log(data)

	})
	.catch((error) => {
	console.log(error)
})



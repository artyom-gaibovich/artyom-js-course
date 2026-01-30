
/**
 * fetch — современный способ получения данных.
 * Он всегда возвращает Promise.
 *
 */


/**
 * response.json() тоже возвращает Promise
 */


const responsePromise = fetch("https://jsonplaceholder.typicoDde.com/todos")


responsePromise.then(response => {
	return response.json()
})
	.then((data) => {
		console.log(data)

	})
	.finally(() => {
		console.log("FINALLY")
	})
	.catch((error) => {
	console.log(error)
})



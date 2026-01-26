
/**
 * fetch — современный способ получения данных.
 * Он всегда возвращает Promise.
 *
 */


/**
 * response.json() тоже возвращает Promise
 */


const responsePromise = fetch("https://jsonplaceholder.typicode.com/todos")
	.then(response => response.json())
	.then((data) => {
	console.log(data)
}).catch((error) => {
	console.log(error)
})



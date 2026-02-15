import { response } from 'express';

async function getTodos() {
	try {
		const response  = await fetch(`https://jsonplaceholder.typicode.com/todos/ddd1`)

		if (!response.ok) {
			throw new Error("There is nothing to 200-s statuses")

		}
		const data = await response.json()

		console.log(data)

	}
	catch (error) {
		console.log(error)
	}
	finally {
		console.log('finally')
	}

}



getTodos()
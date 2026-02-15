
const todos = []

async function getTodos() {
	const response  = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
	const data = await response.json()
	todos.push(data)


	const response2  = await fetch(`https://jsonplaceholder.typicode.com/todos/2`)
	const data2 = await response2.json()
	todos.push(data2)

	console.log()


}


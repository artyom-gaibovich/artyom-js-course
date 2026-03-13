
async function getTodos() {
	const response  = await fetch(`https://jsonplaceholder.typicode.com/todos`)
	return response.json()

}


async function main() {
	const d =  await getTodos()
	console.log(d)
}

main()



const request = new XMLHttpRequest()
request.open("GET", "https://jsonplaceholder.typicode.com/todos")
request.send()
request.addEventListener("load", function() {
	const response = this.responseText
	const parsedJson = JSON.parse(response)
	const firstElemId = parsedJson[0].id

	const secondRequest = new XMLHttpRequest()
	secondRequest.open("GET", `https://jsonplaceholder.typicode.com/todos/${firstElemId}`)
	secondRequest.send()
	secondRequest.addEventListener("load", function() {
		const response = this.responseText
		const parsedJson = JSON.parse(response)
		console.log(parsedJson)

	})
})


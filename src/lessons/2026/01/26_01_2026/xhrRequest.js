
const request = new XMLHttpRequest()
request.open("GET", "https://jsonplaceholder.typicode.com/todos")
request.send()
request.addEventListener("load", function() {
	const response = this.responseText
	const parsedJson = JSON.parse(response)

})


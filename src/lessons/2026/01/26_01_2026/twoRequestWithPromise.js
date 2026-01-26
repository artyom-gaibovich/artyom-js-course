fetch("https://jsonplaceholder.typicode.coDm/posts")
	.then(response => response.json())
.then(todos => {
	console.log(todos)
	return fetch(`https://jsonplaceholder.typicode.com/posts/${todos[0].id}`)
})
	.then(response => response.json())
.then(data => {
	console.log(data)
}).catch(err => console.log(err));

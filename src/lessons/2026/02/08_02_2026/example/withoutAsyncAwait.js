

function getTodos() {
	fetch(`https://jsonplaceholder.typicode.com/todos`).then(r => r.json()).then(d => {
		console.log(d)
	});
}


getTodos()

console.log('end')
function fetchTodo(id) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then(json => json)
}

const tasks = [
    () => fetchTodo(1),
    () => fetchTodo(2),
    () => fetchTodo(3),
]


tasks.reduce((promise, task) => {
    return promise.then(accResponse => {
        task().then(response => [...accResponse, response])
    })
}, Promise.resolve([])).then(results => console.log(results))
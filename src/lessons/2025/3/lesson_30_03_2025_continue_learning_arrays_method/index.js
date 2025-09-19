const taskQueue = ['Task 1', 'Task 2', 'Task 3', 'Task 4']

// push, добавить в конец массива

taskQueue.push('Task 5')

//unsift, добавить в начало массива

taskQueue.unshift('Task 0')


// Метод pop, удаляет последний элемент

taskQueue.pop()

// Метод shift, удаляет первый элемент

taskQueue.shift()

console.log(taskQueue);


function fetchData(todoId) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        .then(response => response.json())
        .then(json => json)
        .catch(error => console.log(error));
}


const
    taskQueueGET = [
        () => fetchData(1),
        () => fetchData(2),
        () => fetchData(3),
        () => fetchData(4)
    ]


function handleFirstTask() {
    const firstTask = taskQueueGET.shift()
    return firstTask().then(data => {
        console.log(data)
        taskQueueGET.push(
            () => fetchData(5)
        )
        handleFirstTask()
    }).catch(error => console.log(error));
}


// Метод для проверки того, что элемент есть в массиве
const users = ['Gri1sha', 'Egor', 'Egor 2']

const isExistsUser = users.includes('Grisha')

const indexExistedUser = users.indexOf('Gri1sha')


const usersToFind = ['User 1_A', 'User 2_3']
const allUsers = ['User 1_A', 'User 2_B', 'User 3', 'User 4', 'User 5']

const result = usersToFind.reduce((acc, curr) => {
    const user = allUsers.find((user) => user === curr)
    if (user) {
        acc += 1
    }
    return acc
}, 0) === usersToFind.length


console.log(result)


function removeLastItem(arr) {
    const newarr = [...arr]
    if (newarr.length === 0) {
        return "Массив пуст";
    }
    return newarr.pop();
}

const myArr = [10, 20, 30]
const newArr = removeLastItem(myArr);


console.log(myArr)
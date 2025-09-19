const tasks = ["Задача_1", "Задача_2"]

function addTask(task) {
    tasks.push(task);
}
function removeTask(taskName) {
    const index = tasks.indexOf(taskName);
    if (index === -1) {
        return
    }
    return tasks.splice(index, 1);
}
function moveTaskToStart(task) {
    const index = tasks.indexOf(task);
    if (index === -1) {
        return
    }
    const oldTask = tasks[index]
    tasks.splice(index, 1)
    tasks.unshift(oldTask)
}
addTask("Задача_3")
removeTask("Задача_2")
moveTaskToStart("Задача_3")
console.log(tasks)

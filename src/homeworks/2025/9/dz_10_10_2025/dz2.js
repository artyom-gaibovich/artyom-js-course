//Напиши функцию, которая принимает массив строк (задач) и ID элемента в DOM.
//Функция должна очистить этот элемент и создать в нем список (`<ul>`) из этих задач. Каждая задача должна быть элементом списка (`<li>`)

function massString(tasks, elementId){
    const container = document.getElementById(elementId);
    const ul = document.createElement("ul");

    for (let i = 0; i < tasks.length; i++) {
        const li = document.createElement("li");
        li.innerText = tasks[i];
        ul.appendChild(li);
    }
    container.appendChild(ul);
}
massString(["str1", "str2", "str3", "str4"], "container");
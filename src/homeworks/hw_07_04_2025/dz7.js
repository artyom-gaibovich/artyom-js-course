/*### Задание: Реализация Очереди с Колбеками (без классов)

Создай объект queue, который реализует очередь с колбеками.
Очередь должна работать по принципу FIFO (First In, First Out – "Первый зашел, первый вышел").

Функционал очереди:
    - enqueue(callback) – добавляет колбек (функцию) в конец очереди.
- dequeue() – удаляет и выполняет первый колбек из очереди.
- size() – возвращает количество элементов в очереди.
- isEmpty() – возвращает true, если очередь пустая, иначе false.*/

const queue = {
    tasks: [],

    enqueue(callback) {
        this.tasks.push(callback);
    },

    dequeue() {
        if (this.isEmpty()) {
            console.log("Очередь пуста");
            return;
        }
        const task = this.tasks.shift();
        task(); // Выполняем функцию
    },

    size() {
        return this.tasks.length;
    },

    isEmpty() {
        return this.tasks.length === 0;
    }
};

// Тестирование
queue.enqueue(() => console.log("Первая задача"));
queue.enqueue(() => console.log("Вторая задача"));
queue.enqueue(() => console.log("Третья задача"));

console.log(queue.size()); // 3

queue.dequeue(); // Первая задача
queue.dequeue(); // Вторая задача

console.log(queue.isEmpty()); // false

queue.dequeue(); // Третья задача
console.log(queue.isEmpty()); // true

queue.dequeue(); // Очередь пуста

class InfiniteTaskQueue {
    constructor() {
        this.tasks = [];
        this.isRunning = false;
        this.currentIndex = 0;
    }

    addTask(task) {
        this.tasks.push(task);
        if (!this.isRunning) {
            this.start();
        }
        return this.tasks.length - 1;
    }

    removeTask(taskId) {
        if (taskId >= 0 && taskId < this.tasks.length) {
            this.tasks[taskId] = null;
            return true;
        }
        return false;
    }

    async start() {
        if (this.isRunning) return;
        this.isRunning = true;

        while (this.isRunning && this.tasks.length > 0) {
            if (this.tasks[this.currentIndex] !== null) {
                try {
                    await this.tasks[this.currentIndex]();
                } catch (err) {
                    console.error('Ошибка выполнения задачи:', err);
                }
            }

            this.currentIndex = (this.currentIndex + 1) % this.tasks.length;

            if (this.currentIndex === 0 && this.tasks.some(t => t === null)) {
                this.cleanup();
            }
        }

        this.isRunning = false;
    }

    stop() {
        this.isRunning = false;
    }

    cleanup() {
        const newTasks = [];
        const oldIndexMap = {};

        this.tasks.forEach((task, index) => {
            if (task !== null) {
                oldIndexMap[newTasks.length] = index;
                newTasks.push(task);
            }
        });

        this.tasks = newTasks;
        this.currentIndex = oldIndexMap[this.currentIndex] || 0;
    }

    getQueueInfo() {
        return {
            totalTasks: this.tasks.length,
            currentPosition: this.currentIndex,
            isRunning: this.isRunning,
            activeTasks: this.tasks.filter(t => t !== null).length
        };
    }
}


const queue = new InfiniteTaskQueue();

// Добавляем задачи
const task1 = queue.addTask(async () => {
    console.log('Задача 1 выполняется');
    await new Promise(resolve => setTimeout(resolve, 1000));
});

const task2 = queue.addTask(async () => {
    console.log('Задача 2 выполняется');
    await new Promise(resolve => setTimeout(resolve, 1500));
});

// Через 5 секунд удаляем первую задачу
setTimeout(() => {
    queue.removeTask(task1);
    queue.removeTask(task2);
    console.log('Задача 1 удалена');
}, 5000);



// Проверяем состояние очереди каждые 2 секунды
setInterval(() => {
    console.log(queue.getQueueInfo());
}, 2000);
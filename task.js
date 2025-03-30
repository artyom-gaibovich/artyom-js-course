const request = require('request');

const download = (url, callback) => {
    request(url, (err, response, body) => {
        if (err) return callback(err);
        callback(null, body);
    });
};

let completed = 0;



class TaskQueue {
    constructor(concurrency) {
        this.concurrency = concurrency;
        this.running = 0;
        this.queue = [];
    }

    pushTask(task) {
        this.queue.push(task);
        this.next();
    }

    next() {
        while (this.running < this.concurrency && this.queue.length) {
            const task = this.queue.shift();
            task((err, data) => {
                if (++completed === tasks.length) {
                    finish();
                }
                this.running--;
                this.next();
            });
            this.running++;
        }
    }
}


const taskQueue = new TaskQueue(2);


const tasks = [
    (cb) => download('https://jsonplaceholder.typicode.com/posts/1', cb),
];



for (let i = 2; i < 200; i++) {
    tasks.push((cb) => download('https://jsonplaceholder.typicode.com/posts/' + i, cb))
}


tasks.forEach(
    task => {
        taskQueue.pushTask(task);
    }
)



function finish() {
    console.log('Завершено');
}

/*
tasks.forEach(task => {
    task((err, data) => {
        console.log(data)
        if (++completed === tasks.length) {
            finish();
        }
    });
});
*/




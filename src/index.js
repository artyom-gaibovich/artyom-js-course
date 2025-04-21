const fs = require('fs');
const cache = {};
const path = require('path');

function inconsistentRead(filename, callback) {
    if (cache[filename]) {
        return callback(null, cache[filename] + 'DATA');
        //return process.nextTick(() => callback(null, cache[filename]));
    }
    fs.readFile(path.join(__dirname, filename), 'utf8', (err, data) => {
        if (err) {
            return callback(err, null);
        }
        cache[filename] = data;
        callback(null, data + 'READ_FILE');
    });
}


function createFileReader(filename) {
    const listeners = [];
    inconsistentRead(filename, (err, data) => {
        listeners.forEach(listener => {
            console.log('КОЛБЭК')
            return listener(err, data)
        });
    });
    return {
        onDataReady: (listener) => listeners.push(listener),
        listeners,
    };
}


const reader1 = createFileReader('data.txt');

reader1.onDataReady((err, data) => {
    console.log(err, data)
    const reader2 = createFileReader('data.txt');
    reader2.onDataReady((err, data) => {
        console.log('ВНУТРЬ')
        console.log(err, data);
    })

    console.log('КОНЕЧНАЯ ТОЧКА')

});


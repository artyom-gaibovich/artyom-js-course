const request = require('request');
const fs = require('fs');
const {mkdirp} = require('mkdirp');
const path = require('path');

const utilities = {
    urlToFilename: function (url) {
        let filename = url
            .replace(/^(https?:\/\/)?(www\.)?/, '') // Убираем протокол и "www."
            .replace(/\/$/, '') // Убираем завершающий слэш
            .replace(/\//g, '_') // Заменяем слэши на подчеркивания
            .replace(/[^a-zA-Z0-9_\.-]/g, '-'); // Заменяем недопустимые символы на дефисы

        if (!filename.endsWith('.html')) {
            filename += '.html';
        }

        return filename;
    },
};


function spider(url, callback) {
    const filename = utilities.urlToFilename(url);
    fs.exists(filename, exists => {
        if (exists) {
            console.log('True')
            return callback('ERROR_FILE_EXISTS', exists)
        }
        request(url, (err, response, body) => {
            if (err) return callback(err);
            mkdirp(path.dirname(filename)).then(() => {
                fs.writeFile(filename, body, err => {
                    if (err) {
                        return callback(err)
                    }
                    callback(null, filename, true);
                });
            }).catch(err => {
                callback(err);
            });
        })
        callback(null, exists);
    })
}


spider('https://google.com', (err, data) => {
    if (err) {
        console.error(err)
    }
    console.log(data)
})


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
    getPageLinks: function (currentUrl, body) {
        const links = [];
        const regex = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/g;

        let match;
        while ((match = regex.exec(body)) !== null) {
            const href = match[2];
            const absoluteUrl = new URL(href, currentUrl).href;
            links.push(absoluteUrl);
        }

        return links;
    }
};

function spider(url, nesting, callback) {
    const filename = utilities.urlToFilename(url);
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {

            return download(url, filename, (err, body) => {
                if (err) {
                    return callback(err);
                }
                spiderLinks(url, data, nesting, callback);

            })
        }
        spiderLinks(url, data, nesting, callback);

    })

}


function spiderLinks(currentUrl, body, nesting, callback) {
    if (nesting === 0) {
        return process.nextTick(callback);
    }
    const links = utilities.getPageLinks(currentUrl, body);
    if (links.length === 0) {
        return process.nextTick(callback);
    }
    let completed = 0, hasErrors = false;

    function done(err) {
        if (err) {
            hasErrors = true;
            return callback(err);
        }
        if (++completed === links.length && !hasErrors) {
            return callback();
        }
    }

    links.forEach(link => {
        spider(link, nesting - 1, done);
    });
}




/*
function spiderLinks(currentUrl, body, nesting, callback) {
    if (nesting === 0) {
        return process.nextTick(callback);
    }
    const links = utilities.getPageLinks(currentUrl, body).slice(0,5);

    function iterate(index) {
        if (index === links.length) {
            return callback();
        }

        spider(links[index], nesting - 1, err => {
            if (err) {
                return callback(err);
            }
            return iterate(index + 1);
        })
    }

    iterate(0)
}
*/

function saveFile(filename, content, callback) {
    mkdirp(path.dirname(filename)).then(() => {
        fs.writeFile(filename, content, err => {
            if (err) {
                return callback(err)
            }
            callback(null, filename, true);
        });
    }).catch(err => {
        callback(err);
    });
}

function download(url, filename, callback) {
    request(url, (err, response, body) => {
        if (err) {
            return callback(err);
        }
        saveFile(filename, body, err => {
            if (err) {
                return callback(err);
            }
            console.log(`Downloaded and saved ${url}`);
            callback(null, body);
        })
    })
}

/*
spider('https://google.com', 3, (err, filename, downloaded) => {
    if (err) {
        console.error('Ошибка:', err);
    } else {
        if (downloaded) {
            console.log(`Файл успешно скачан и сохранен как: ${filename}`);
        } else {
            console.log(`Файл уже существует: ${filename}`);
        }
    }
});

*/

console.log('1')

request("https://jsonplaceholder.typicode.com/posts/100", (err, response, body) => {
    if (err) console.error(err);
    console.log(body);
});





function spiderLinks(currentUrl, body, nesting, callback) {
    if (nesting === 0) {
        return process.nextTick(callback);
    }
    const links = utilities.getPageLinks(currentUrl, body);
    if (links.length === 0) {
        return process.nextTick(callback);
    }
    let completed = 0, hasErrors = false;

    function done(err) {
        if (err) {
            hasErrors = true;
            return callback(err);
        }
        if (++completed === links.length && !hasErrors) {
            return callback();
        }
    }

    links.forEach(link => {
        spider(link, nesting - 1, done);
    });
}
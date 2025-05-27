'use strict'



const callback = (data) => {
	console.log(data)
}

setTimeout(() => callback('hello world'), 1000)
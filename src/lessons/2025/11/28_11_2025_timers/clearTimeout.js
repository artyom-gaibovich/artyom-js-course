

/*
const myTimer = setTimeout(() => {
	console.log('Hello world')
}, 1000);


console.log(myTimer)
*/



// Очистка таймера


console.log(1)

const myClearTimer = setTimeout(() => {
	console.log(2)
}, 1000);

clearTimeout(myClearTimer)

console.log(3)

const messages = ['hello 1', 'hello 2']

setTimeout((arg1, arg2) => {
	console.log('ARGS::', arg1, arg2)
}, 1000, ...messages)





/**
 * setTimeout(callback, delay, arg1, arg2..., argN);
 *
 *  callback – функция отложенного вызова (те мы ее можем вызывать позже)
 *  delay – задержка в миллисекундах
 *  arg1, arg2, ... argnN – доп. аргументы для callback
 */


// Формы записи функции
const callback = function() {
	console.log('callback');
}


setTimeout(function() {
	console.log('CALLBACK!');
}, 5000)

setTimeout(() => {
	console.log('CALLBACK!');
}, 5000)


setTimeout(callback, 5000)


// Передача аргументов

setTimeout((arg1, arg2) => {
	console.log('Hello: ', arg1, arg2);
}, 20, "JavaScript", "Python")




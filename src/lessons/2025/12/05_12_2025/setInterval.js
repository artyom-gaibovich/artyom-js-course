/**
		setInterval(callback, delay)
 	*callback — функция, которую нужно вызывать.
	*delay — задержка между вызовами в миллисекундах.
 *
 */


/*const interval = setInterval(() => {
	console.log('HELLO')
}, 1000)

clearInterval(interval)*/

/**
 *  Когда использовать?
 *
 * – обновлять время на странице
 * – делать пульсацию анимации
 * – проверять какое-то состояние
 * – отправлять «пинги» на сервер
 * – запускать повторяющиеся вычисления
 *
  */


const interval = setInterval(() => {
	fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => {
		console.log(data);
	})
}, 1000)


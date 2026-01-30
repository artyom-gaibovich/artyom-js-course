

document.addEventListener('DOMContentLoaded', () => {
	const h1 = document.querySelector('#loading')


	const isRequested = document.querySelector('#isRequested')


	const responsePromise = fetch("https://jsonplaceholder.typicode.com/todos")
	h1.innerHTML = "Загрузка..."
	responsePromise.then(response => {
		h1.innerHTML = "Данные получены"
		return response.json()
	})
		.then((data) => {
			console.log(data)
		})
		.catch((error) => {
			h1.innerHTML = "Возникла ошибка"
			console.log(error)
		}).finally(() => {
		isRequested.innerHTML = "Был сделан запрос на сервер"
	})



})
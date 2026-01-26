
const myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Успешно завершен");
		//reject("Неверно завершен")
	}, 1000)
})


myPromise.then((data) => {
	console.log(data)
}).catch((err) => {
	console.log(err)
})
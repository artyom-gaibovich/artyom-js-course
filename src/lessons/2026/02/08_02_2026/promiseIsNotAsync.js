

const instantPromise = Promise.resolve("instant")

const timerPromise = new Promise((resolve) => {
	console.log('constructor.promise')
	for (let i = 0; i < 10000000000000; i++) {

	}
	setTimeout(() => {
		resolve('timer')
	}, 1000)
});




timerPromise.then((data) => {
	console.log(data)
})

instantPromise.then((data) => {
	console.log(data)
})
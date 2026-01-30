
const myPromise = new Promise((resolve, reject) => {
	reject("OK")
})


myPromise.then((data) => {
	console.log(data)
}).catch((err) => {
	console.log(err)
})
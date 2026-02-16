

async function getCity (latitude, longitude){
	const response  = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=ru`)
	return (await response.json()).city;
}


// первый подход
async function  main() {
	await getCity(10,20)
	await getCity(30,20)
	await getCity(40,20)
}


// далее запускаем -≥ main()

// Решение: IIFE (Immediately Invoked Function Expression)

(async () => {
	try {
		await getCity(10,20)
		await getCity(30,20)
		await getCity(40,20)
	} catch (err) {
		console.error(err);
	}

})()


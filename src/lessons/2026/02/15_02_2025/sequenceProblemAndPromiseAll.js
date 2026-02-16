async function getCity (latitude, longitude, err){
	if (err) {
		throw err;
	}
	const response  = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=ru`)
	return (await response.json()).city;
}

(async () => {


	const startTime = performance.now();
	console.log(`Старт: ${startTime.toFixed(2)} мс`);

/*
	Последовательное выполнение
	for (let i = 0; i < 20; i++) {
		const data = await getCity(10, 20);
		console.log(data)
	}*/


/*
	конкрутеное выполнение 20-ти запрсоов
	await Promise.all([
		getCity(10, 20),
		getCity(10, 20),
		getCity(10, 20),
		getCity(10, 20),
		getCity(10, 20),
		getCity(10, 20),
		getCity(10, 20),
		getCity(10, 20),
		getCity(10, 20),
		getCity(10, 20),
		getCity(10, 20),
		getCity(10, 20),
		getCity(10, 20),
		getCity(10, 20),
		getCity(10, 20),
		getCity(10, 20),
		getCity(10, 20),
		getCity(10, 20),
		getCity(10, 20),
		getCity(10, 20),


	])*/


	const promises = []
	for (let i = 0; i < 20; i++) {
		promises.push(getCity(10, 20))
		if (i === 10) {
			promises.push(getCity(10, 20, true))
		}
	}


	try {
		await Promise.all(promises)

	} catch (e) {
		console.error(e)
	}


	const endTime = performance.now();
	console.log(`Финиш: ${endTime.toFixed(2)} мс`);

	const totalTime = endTime - startTime;
	console.log(`Общее время выполнения: ${totalTime.toFixed(2)} мс (${(totalTime / 1000).toFixed(2)} сек)`);


})()
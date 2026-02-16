async function getCity (latitude, longitude, err){
	if (err) {
		throw err;
	}
	const response  = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=ru`)
	return (await response.json()).city;
}

(async () => {


	const promises = []
	for (let i = 0; i < 20; i++) {
		promises.push(getCity(10, 20))
		if (i === 10) {
			promises.push(getCity(10, 20, true))
		}
	}


	try {
		const result = await Promise.allSettled(promises)
		console.log(result)

	} catch (e) {
		console.error(e)
	}



})()
async function getCity (latitude, longitude, err){

	const response  = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=ru`)
	return (await response.json()).city;
}

(async () => {


	const promises = []
	for (let i = 0; i < 20; i++) {
		promises.push(getCity(10, 20))

	}


	try {
		const result = await Promise.race(promises)
		console.log(result)

	} catch (e) {
		console.error(e)
	}



})()
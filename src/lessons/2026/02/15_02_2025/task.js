/**
 * Задание: «Мой город»
 *
 * Напиши асинхронную функцию, которая определяет город пользователя.
 *
 * Нужно:
 *
 * получить геолокацию пользователя через navigator.geolocation.getCurrentPosition
 *
 * обернуть получение координат в Promise
 *
 * использовать async / await
 *
 * по широте и долготе выполнить fetch к API обратного геокодирования
 *
 * API: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude={crd.latitude}&longitude={}&localityLanguage=ru
 *
 * получить данные и вывести название города в консоль
 *
 * обработать возможные ошибки через try / catch
 */




/*
var options = {
	enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 0,
};

function success(pos) {
	var crd = pos.coords;

	console.log("Ваше текущее местоположение:");
	console.log(`Широта: ${crd.latitude}`);
	console.log(`Долгота: ${crd.longitude}`);
	console.log(`Плюс-минус ${crd.accuracy} метров.`);
}

function error(err) {
	console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);*/

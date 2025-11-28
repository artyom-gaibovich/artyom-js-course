//Вот пример того, как работает Event Loop с таймерами (таймер не выполняется сразу)

console.log(1)

setTimeout(() => {
	console.log(2)
}, 0);

console.log(3)
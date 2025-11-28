


let isTimerActive = false;
let timer;

function createTimer() {
	if (!isTimerActive) {
		timer = setTimeout(() => {
			console.log('Timer')
		}, 1000)
		isTimerActive = true;
	}
	else {
		clearTimeout(timer)
		isTimerActive = false;
	}
}

createTimer()
createTimer()
createTimer()

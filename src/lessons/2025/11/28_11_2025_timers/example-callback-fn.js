

const callback = function() {
	console.log('callback');
}


const callback2 = function() {
	console.log('callback 2');
}



function main(cb) {
	cb()
}


main(callback)
main(callback2)
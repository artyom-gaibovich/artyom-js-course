import {A} from './someModule.js'
const elem = document.getElementById('one');

await new Promise((resolve, reject) => {
	setTimeout(() => {
		elem.innerHTML = 'Ready'
		resolve()
	}, 4000)
})

elem.innerHTML = 'Second'
console.log(A)
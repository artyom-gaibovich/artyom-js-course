


function getNumberDefault() {
	return 123
}


async function getNumber() {

}

const result1 = getNumber()
const result2 = getNumberDefault()

result1.then((r) => {
	console.log(r)
})
console.log(result2)

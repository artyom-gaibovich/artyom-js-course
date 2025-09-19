/**
 *
 * StackOverflow Problem
 */
const sum = 1;
console.log('begin');

console.log(sum);


function sum2(n) {
	console.log('call sum2', n);
	n = n + 1;
	if (n > 1000) {
		return n;
	}
	console.log(n)
	return sum2(n);
}

sum2(sum)






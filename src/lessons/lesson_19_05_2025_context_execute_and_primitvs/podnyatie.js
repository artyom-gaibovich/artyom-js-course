'use strict'
/**
 * Поднятие
 */

testHello()
console.log(test)

var test;



function testHello() {
	console.log(this)
}

const arrowFunction = () => {
	console.log(this)
	debugger
}



const button = document.getElementById('clickMe');

const text = document.querySelector('#text')

text.addEventListener('input', function() {
	console.log(this)
	debugger
})


button.addEventListener('click', function (){
	console.log(this)
	debugger
})
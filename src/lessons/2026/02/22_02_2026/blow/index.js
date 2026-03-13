


const btn = document.querySelector(".btn");
const div = document.querySelector(".div");
const p = document.querySelector(".p");


btn.addEventListener("click", () => {
	console.log("click from btn");
})

div.addEventListener("click", () => {
	console.log("click from div");
})

p.addEventListener("click", () => {
	console.log("click from p");
})






// 1) Фаза захвата

/*
document -> html -> body -> div -> p -> button
 */

// 2) Целевой элемент (target), в нашем случае это button

// 3) Фаза всплытия
/*
button -> p -> div -> body -> html -> document
 */
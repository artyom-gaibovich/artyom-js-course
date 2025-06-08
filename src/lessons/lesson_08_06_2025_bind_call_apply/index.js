console.log('hello world')

/**
 *
 * @param {number} n
 * @returns {number[][]}
 */
function createMatrix(n){
    const matrix = [];
    let c = 0;
    for (let i = 1; i <= n; i++) {
        const row = [];
        for (let j =1; j <= n * 2; j++){
            row.push(c);

            c+=3

        }
        matrix.push(row);
    }
    return matrix;
}


const button = document.querySelector(".example");

button.addEventListener("click", (event) => {
	button.style.backgroundColor = 'pink';
});


button.addEventListener("hover", (event) => {
	button.style.backgroundColor = 'pink';
});

button.addEventListener(
	"mouseleave",
	(event) => {
		if (button.style.backgroundColor && button.style.backgroundColor === 'pink') {
			return
		}
		event.target.style.backgroundColor = "";
	},
	false,
);

button.addEventListener(
	"mouseenter",
	(event) => {
		if (button.style.backgroundColor && button.style.backgroundColor === 'pink') {
			return
		}
		event.target.style.backgroundColor = "red";
	},
	false,
);




function logSubmit(event) {
	const formData = new FormData(event.target);
	const formProps = Object.fromEntries(formData);
	const {myNumber} = formProps;
	const myNumberInt = parseInt(myNumber);
	const matrix = createMatrix(myNumberInt);
	debugger
	event.preventDefault();
}

const form = document.getElementById("form");
form.addEventListener("submit", logSubmit);



/**
 * n = 3
 * return [
 * 		[0,3,6,9, 12, 15],
 * 		[18,21,24,27, 30, 33],
 * 		[36,39,42,45, 48, 51],
 * 	]
 *
 * n = 2
 * return [
 * 		[0,3,6,9],
 * 		[12, 15, 18, 21]
 * 	]
 */

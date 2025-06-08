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


/**
 * Д/З
 * 1) Нужнно понять, куда нужно навести обработчики соыбтий (click, mouseleave, mouseenter)
 * 2) Тебе нужно отренедерить HTML фрагмент,в котором будут элементы матрицы.
 *  пример:
 *  функция вернула матрцу n = 2, matrix = [0, 3], тогда HTML = <div>
 *    <div>0</div> <div>3</div>
 *  </div>
 *  3) вот на те div'ы тебе и нужно навесить обраичики событий, которые мы рассмотерил
 * @param event
 */



function handleInput(event) {
	const formData = new FormData(event.target);
	const formProps = Object.fromEntries(formData);
	const {myNumber} = formProps;
	const myNumberInt = parseInt(myNumber);
	const matrix = createMatrix(myNumberInt);
	/**\
	 * Здесь ты получаешь данные
	 */
	debugger
	event.preventDefault();
}

const form = document.getElementById("form");
form.addEventListener("submit", handleInput);



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

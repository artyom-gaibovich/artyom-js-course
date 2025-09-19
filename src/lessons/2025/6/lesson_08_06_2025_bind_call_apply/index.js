
/**
 * Д/З
 * 1) Нужно понять, куда нужно навести обработчики событий (click, mouseleave, mouseenter)
 * 2) Тебе нужно отренедерить HTML фрагмент,в котором будут элементы матрицы.
 *  пример:
 *  функция вернула матрицу n = 2, matrix = [0, 3], тогда HTML = <div>
 *    <div>0</div> <div>3</div>
 *  </div>
 *  3) вот на те div'ы тебе и нужно навесить обработчики событий, которые мы рассмотрели
 * @param event
 */



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




const root = document.getElementById("root");

function handleInput(event) {
	root.innerHTML = '';
	const formData = new FormData(event.target);
	const formProps = Object.fromEntries(formData);
	const {myNumber} = formProps;
	root.append(MatrixGrid({matrix: createMatrix( parseInt(myNumber))}))
	event.preventDefault();


	const grid = document.querySelector('.grid');
	grid.addEventListener('click', (event) => {
		if (event.target.tagName === 'BUTTON') {
			const button = event.target;
			button.style.backgroundColor = 'pink';
		}
	})


	grid.addEventListener("mouseover", (event) => {
		if (event.target.tagName === 'BUTTON') {
			const button = event.target;

			if (button.style?.backgroundColor === 'pink') {
				return;
			}

			button.style.backgroundColor = 'red';
		}
	})


	grid.addEventListener("mouseout", (event) => {
		if (event.target.tagName === 'BUTTON') {
			const button = event.target;

			if (button.style?.backgroundColor === 'pink') {
				return;
			}
			button.style.backgroundColor = '';
		}
	})


}

const form = document.getElementById("form");
form.addEventListener("submit", handleInput);




/**
 *
 * @param {number[][]} matrix
 *
 */
function MatrixGrid({matrix}) {
	const grid = document.createElement('div')
	grid.classList.add("grid")
	matrix.forEach((currentRow) => {
		const row = document.createElement('div')
		row.classList.add("row")
		currentRow.forEach(el => {
			const cell = document.createElement('div')
			const button = document.createElement('button')
			cell.append(button);
			button.innerText = el;
			button.classList.add("cell")
			row.append(cell);
		})

		grid.append(row);
	})
	return grid;
}




/**
 * Типы событий
 *     click - клик мышью
 *     input - ввод данных
 *     keydown, keyup - нажатие/отпускание клавиши
 *     mouseover, mouseout - наведение/уход курсора
 */



function submitForm() {
	const input = document.querySelector('.input');
	const panel = document.querySelector('.panel');

	const inputValue = input.value.trim();
	if (inputValue === '') {
		return;
	}
	panel.innerText = inputValue
	input.value = ''

}


function handleInputChange(e) {
	if (e.code === 'Enter') {
		submitForm()
	}
	if (e.code === 'Escape') {
		e.target.value = '';
	}

}

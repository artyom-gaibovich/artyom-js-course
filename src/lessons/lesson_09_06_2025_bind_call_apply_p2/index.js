'use strict';


/**
 * Сделать объект пользователя, у которого есть свойство пароль(password).
 * И с помощью функции удалить пароль (те тебе надо сделать привязку контекста).
 * @param reset
 */

function removePassword(reset) {
	if(reset) {
		this.password = '';
		return;
	}
	this.password = 'OK'

}
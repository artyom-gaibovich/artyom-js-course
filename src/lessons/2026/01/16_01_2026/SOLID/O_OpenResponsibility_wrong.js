


// проблемный подход (сервис по отправке смски
export class NotificationService {

	send(message, messengerType) {
		if (messengerType === 'sms') {
			// логика по отправке смски
			console.log(message)
		}
		else if (messengerType === 'email') {
			// логика по отправке email
			console.log(message)
		}
		else if (messengerType === 'whatsapp') {
			// логика по отправке whatsapp
			console.log(message)
		}
		else if (messengerType === 'telegram') {
			// логика по отправке telegram
			console.log(message)
		}

	}
}
// правильный подход (сервис по отправке смски)

/**
 * Interface NotificationStrategy{
 *    send(message)  {}
 * }
 */


export class TelegramNotificationStrategy {
	send(message) {
		// логика по отправке telegram
		console.log(message)
	}
}


export class SmsNotificationStrategy {
	send(message) {
		// логика по отправке sms
		console.log(message)
	}
}



export class EmailNotificationStrategy {
	send(message) {
		// логика по отправке email
		console.log(message)
	}
}


export class NotificationService {

	constructor(telegram, email) {
		this.telegram = telegram
		this.email = email
	}

	send(message, messengerType) {

		 if (messengerType === 'email') {
			 this.email.send(message)
		}

		 if (messengerType === 'telegram') {
			 this.telegram.send(message)

		}

	}
}
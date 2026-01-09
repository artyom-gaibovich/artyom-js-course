


interface User {
	name: string;
	email: string;
}


interface IUserRepository {
	getOne(): User
}

class UserRepositoryPostgres implements IUserRepository {
	getOne(): User {
		const user: User = {
			name: "Grisha",
			email: "grisha@gmail.com",
		}
		return user;
	}

}

class UserRepositoryMySQL implements IUserRepository {
	getOne(): User {
		for (let i = 0; i < 100; i++) {

		}
		const user: User = {
			name: "Grisha",
			email: "grisha@gmail.com",
		}
		return user;
	}
}
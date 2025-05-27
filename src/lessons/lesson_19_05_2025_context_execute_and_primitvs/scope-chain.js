const test = 10;

function createUser(age) {
	const name = 'vasya';

	function createChild(age) {
		const children = [age, name];
		return children;
	}
	if (age < 0) {
		const newAge = 0;
		var i = 'Some variable';
		return createChild(newAge)
	}
	return createChild(age)
}


createUser(10)



let msg = 'Successfully created user';
const user = {
	name: 'VAas',
	roles: [],
}

function addRoleForUser(user, role) {
	if (role === 'admin') {
		const message = 'Error';
		console.log(message);
		return user;
	}
	user.roles.push(role)
	let msg = 'Urraaaa';
	function logCreated() {
		console.log(user.roles)
	}
	logCreated()
	return user;
}

addRoleForUser(user, 'admin')
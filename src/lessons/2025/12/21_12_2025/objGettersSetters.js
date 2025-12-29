const user = {
	name: 'John',

	get myName() {
		return this.name
	},

	set newName(newName) {
		this.name = newName
	}

}


console.log(user.myName)

user.newName = 'John 123123'


console.log(user.myName)

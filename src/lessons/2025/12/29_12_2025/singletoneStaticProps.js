const { uuid } = require('uuidv4');

class Database {

	static isCreatedInstance = false;
	static databaseInstance;


	constructor(host, port, username, password) {
		if (Database.isCreatedInstance) {
			return Database.databaseInstance
		}
		this.host = host;
		this.port = port;
		this.username = username;
		this.password = password;
		this.id = uuid();
		Database.isCreatedInstance = true
		Database.databaseInstance = this
	}

	connect() {
		console.log(`Connected to Database: ${this.host}`);
	}
}

const db = new Database('127.0.0.1', 5432, 'postgres', 'postgres');

const db2 = new Database('127.0.0.2', 5433, 'posвtgres', 'postgres');

db.connect();

db2.connect();
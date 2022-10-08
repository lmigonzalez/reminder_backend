const mysql = require('mysql2')

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'reminder',
	password: 'Luisgonzalez1996'
	
})


module.exports = {connection}


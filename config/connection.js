// Set up MySQL connection.
var mysql = require("mysql");


if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSBD_URL);
} else {
  connection = mysql.createConnection ({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "burgers_db"
});
};

// Make connection.
connection.connect();

// Export connection for our ORM to use.
module.exports = connection;

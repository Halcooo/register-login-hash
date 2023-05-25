const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "user",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Sucessfuly connected to database!!!!!!!!!!");
});

module.exports = connection;

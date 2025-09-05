const mysql = require("mysql2");

// Create a connection
const db = mysql.createConnection({
  host: "localhost",   // database server
  user: "root",        // your MySQL username
  password: "your_password", // your MySQL root password
  database: "airline_db" // change to your database name
});

// Connect
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("✅ Connected to MySQL as id " + db.threadId);
});

module.exports = db;

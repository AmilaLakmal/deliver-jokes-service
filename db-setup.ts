import * as mysql from 'mysql2';
import * as dotenv from 'dotenv';

dotenv.config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }

  console.log('Connected to the MySQL server.');

  // Check if the database exists, and if not, create it
  connection.query(
    `CREATE DATABASE IF NOT EXISTS ${DB_NAME}`,
    (err, results) => {
      if (err) {
        console.error('Error creating database:', err.stack);
      } else {
        console.log(`Database ${DB_NAME} created or already exists.`);
      }

      connection.end();
    },
  );
});

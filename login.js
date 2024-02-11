const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 5500;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'profile'
});


connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});


app.post("/", async (req, res) => {
  try {
    const { firstname, email, phone, e_sub, yourmess } = req.body;
    const query = 'INSERT INTO data (username, pass, phno, sub, Mess) VALUES (?, ?, ?, ?, ?)';
    const [results, fields] = await connection.promise().execute(query, [firstname, email, phone, e_sub, yourmess]);
    console.log('Data inserted successfully.');
    res.status(200).send('Data inserted successfully.');
  } catch (error) {
    console.error('Error executing MySQL query: ' + error.stack);
    res.status(500).send('Internal Server Error');
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

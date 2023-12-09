const express = require('express');
const mysql = require('mysql'); // Use mysql2 package
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

const pool = mysql.createPool({
    host: 'sql9.freemysqlhosting.net',
    user: 'sql5668849',
    password: 'hMHbw61nX7',
    database: 'sql5668849',
    waitForConnections: true,
    connectionLimit: 10, // Adjust as needed
    queueLimit: 0
});

// API Routes

app.post('/api/signup', (req, res) => {
    const { username, password } = req.body;

    // Hash the password using bcrypt
    bcrypt.hash(password, 10, (hashErr, hash) => {
        if (hashErr) {
            res.status(500).json({ error: 'Error hashing password' });
        } else {
            const date = new Date().toISOString().slice(0, 10); // Transform date to yyyy-mm-dd format
            pool.query('INSERT INTO user (username, password, signuped) VALUES (?, ?, ?)', [username, hash, date], (error, results) => {
                if (error) {
                    console.error('Database error:', error);
                    res.status(500).json({ error: 'Error inserting user', details: error });
                } else {
                    res.json({ success: true });
                }
            });
            
            
        }
    });
});

app.get('/', (req, res) => {
    pool.query('SELECT * FROM user', (error, results) => {
        if (error) {
            console.error('Database error:', error);
            res.status(500).json({ error: 'Error retrieving users', details: error });
        } else {
            res.json(results);
        }
    });
});

app.listen(port, () => {
    console.log(`Server on port ${port}`);
});

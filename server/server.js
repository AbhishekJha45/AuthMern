require('dotenv').config();
const path = require('path');
const express = require('express');
const connectDB = require('./db');
const { registerUser, loginUser } = require('./controller/userController');

connectDB();
const app = express();
app.use(express.json());

app.post('/api/register', registerUser);
app.post('/api/login', loginUser);

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
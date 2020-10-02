require('./models/User');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri = 'mongodb://127.0.0.1:27017/tracks';
mongoose.connect(mongoUri, {
	useNewUrlParser: true,
	useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
	console.log('Connected to mongo db');
});

mongoose.connection.on('error', (err) => {
	console.error('Error connecting to mongo db', err);
});

app.get('/', (req, res) => {
	res.send('Hi there');
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});

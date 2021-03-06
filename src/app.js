const express = require('express');
const app = express();
const config = require('./config');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cors = require('./middleware/cors');
const auth = require('./middleware/auth');

const studentRoutes = require('./routes/students');
const placeRoutes = require('./routes/places');
const userRoutes = require('./routes/user');

const notFoundController = require('./controllers/notFound');

mongoose.connect(config.db.url, { useNewUrlParser: true });

app.use(bodyParser.json());

app.use(cors);

app.use('/students', auth, studentRoutes);
app.use('/places', placeRoutes);
app.use('/user', userRoutes);

app.use('/*', notFoundController);
module.exports = app;
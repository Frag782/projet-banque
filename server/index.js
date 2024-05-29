const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const { CORS_OPTIONS, DATABASE, PORT, SESSION_OPTIONS } = require('./data/config.json');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const accountRoutes = require('./routes/accountRoutes');

const app = express();

/***** MIDDLEWARES *****/
app.use(cors(CORS_OPTIONS));
app.use(session(SESSION_OPTIONS));
app.use(cookieParser());
app.use(express.json());

/***** ROUTES *****/
app.use(userRoutes);
app.use(authRoutes);
app.use(accountRoutes);
app.get('/', (req, res) => res.send('API en service.'));

mongoose.connect(DATABASE)
    .then(() => {console.log('Connecté à la base de données.')})
    .catch((err) => {console.error(err)});

app.listen(PORT, () => console.log(`À l'ècoute sur le port ${PORT}.`));
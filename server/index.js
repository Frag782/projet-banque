const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./data/config.json');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

/***** MIDDLEWARES *****/
app.use(cors());
app.use(express.json());

/***** ROUTES *****/
app.use(userRoutes);
app.use(authRoutes);
app.get('/', (req, res) => res.send('API is up and running...'));

mongoose.connect(config.dbConnection)
    .then(() => {console.log('Connected')})
    .catch((err) => {console.error(err)});
app.listen(config.port, () => console.log('Listening on port 9000...'));
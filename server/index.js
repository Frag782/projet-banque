const express = require('express');
const cors = require('cors');
const config = require('./data/config.json');
const { authenticate, register } = require('./utils/authService');
const { fetchAccounts } = require('./utils/userService');

const app = express();

/***** MIDDLEWARES *****/
app.use(cors());
app.use(express.json());

/***** ROUTES *****/
app.get('/', (req, res) => {
    res.send('Ok');
})

app.post('/register', register);
app.post('/login', authenticate);
app.post('/user/accounts', fetchAccounts);

app.listen(config.port, () => console.log('Listening on port 9000...'));
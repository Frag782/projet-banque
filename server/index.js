const express = require('express');
const cors = require('cors');
const { showUsers, authenticate } = require('./users');

const port = 9000;
const app = express();
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Ok')
})

/* Routes */
app.post('/', (req, res) => {
    const {username, password} = req.body;
    console.log(req.body)

    if (authenticate(username, password))
        res.json({message : 'Connected', success : true})
    else res.json({message : 'Connection failed', success : false})
})

app.listen(port, () => {console.log('Listening on port 9000...')});
const express = require('express');
const { readdirSync } = require('fs');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const connectDB = require('./Config/db');

require('dotenv').config();
const { PORT } = process.env;

const app = express();

connectDB();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json({ limit: '10mb'}));

// Routes 1
app.get('/', (req, res) => {
    res.send("This is my API running!")
})

// http://localhost:3000/api/product
readdirSync('./Routes').map(rout => (
    // console.log(rout)
    app.use('/api', require('./Routes/' + rout))
));

app.listen(PORT || 8000, () => {
    console.log(`Server is RUNNING!`)
})


module.exports = app;
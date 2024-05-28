const express = require('express');
const dotenv = require('dotenv').config()
const cors =  require('cors')
const {mongoose} = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();


mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Ka connect nakas mongoDB gois')).catch((err) => console.log('Malasa nimo migo wa ka ka connect', err))

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))

app.use('/', require('./routes/routes'))

const port = 8000;
app.listen(port, () => console.log('Nag dagan ang server ani nga port migo ' + port))


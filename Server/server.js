// require('dotenv').config()
const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

mongoose.connection.on('connected', function () {  
    console.log('Mongoose default connection open to ' + process.env.MONGO_URI);
  }); 

module.exports.Artist = require('./Models/ArtistModel')

app.listen(3001)
// // require('dotenv').config()
// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//     res.send('Hello world!')
// })

// app.get('*', (req, res) => {
//     res.status(404).send('<h1>404 Page</h1>')
// })

// app.listen(3001)
require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

mongoose.connection.on('connected', function () {  
    console.log('Mongoose default connection open to ' + process.env.MONGO_URI);
  }); 

module.exports.Artist = require('./Models/ArtistModel')
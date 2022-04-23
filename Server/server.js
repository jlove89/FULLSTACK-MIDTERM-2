// require('dotenv').config()
const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')

const app = express()

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

mongoose.connection.on('connected', function () {  
    console.log('Mongoose default connection open to ' + process.env.MONGO_URI);
  }); 

app.listen(3001)
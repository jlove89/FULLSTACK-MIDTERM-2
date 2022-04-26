// Dependencies (?)
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const artistController = require('./Controllers/Artist_Controller')
// if (process.env.node !== 'production') {}
require('dotenv').config();

const app = express()

// Middleware?
app.use(cors());
app.use(express.json());
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))


// Controllers
app.use('/artists', require('./Controllers/Artist_Controller'))

// Route for pages NOT handled by OUR routes.
app.get('*', (req, res) => {
  res.send('error404')
})

// DB connection 
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// DB connection test
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + process.env.MONGO_URI);
});

// Listener
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
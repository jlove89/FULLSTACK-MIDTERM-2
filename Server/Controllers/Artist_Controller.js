const findAllArtists = require('express').Router
//const findArtistByArt_Type = require('express').Router
//const findArtistByName = require('express').Router
const db = require('../Models')

// ROUTE 1
findAllArtists.get('/', (req, res) => {
    db.findAllArtists.find()
    .then((findAllArtists) => {
        res.render('Models/ArtistModel', { findAllArtists })
    })
    //.catch(err => {
       // console.log('err', err)
        //res.render('error404')
   // })
})

// ROUTE 2
findAllArtists.post('/', (req,res) => {
    db.findAllArtists.create(req.body)
    //.then(() => {
        //res.redirect('/Models')
    //})
})

// ROUTE 3
findAllArtists.put('/', (req, res) => {
    db.findAllArtists.findBye
})
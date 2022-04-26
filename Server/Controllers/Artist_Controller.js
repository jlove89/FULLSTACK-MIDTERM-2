// Dependencies
const router = require('express').Router()

// Configuration
const Artist = require('../Models/ArtistModel.js')

// Index
router.get('/', (req, res) => {
    Artist.find()
        .then((Artists) => {
            return res.json(Artists)
        })
        .catch((err) => {
            console.log(err)
            res.status(404)
            res.json({ 'message': 'Artist not playing' })
        })
})

// Create(POST)
router.post('/', (req, res) => {
    Artist.create(req.body)
        .then((Artist) => {
            return res.json(Artist)
        })
        .catch((err) => {
            res.status(404)
            res.json({ 'message': 'Artist not playing' })
        })
})

// Show
router.get('/:id', (req,res) => {
    Artist.findById(req.params.id)
    .then((Artist) => {
        return res.json(Artist)
    })
    .catch((err) => {
        res.status(404)
        res.json({ 'message': 'Artist not playing' })
    })
})

// Add/New
router.get('/new', (req, res) => {
    return res.json(Artist)
})

// Update/Edit
router.put('/', (req, res) => {
    Artist.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((Artist) => {
            return res.json(Artist)
        })
        .catch((err) => {
            res.status(404)
            res.json({ 'message': 'Artist not playing' })
        })
})

// Delete
router.delete('/:id', (req, res) => {
    Artist.findByIdAndDelete(req.params.id)
        .then((Artist) => {
            return res.json(Artist)
        })
        .catch((err) => {
            res.status(404)
            res.json({ 'message': 'Artist not playing' })
        })
})

module.exports = router
const express = require ("express")
const { Model } = require("mongoose")
const router = express.Router()
const movieSchema = require("../models/schema")

//crear critica
router.post("/critMovies", (req, res) => {
    const movie = movieSchema(req.body)
    movie
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//ver todas las criticas
router.get("/critMovies", (req, res) => {
    movieSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//encontrar un usuario especifico
router.get("/critMovies/:id", (req, res) => {
    const { id } = req.params
    movieSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//Editar una critica
router.put("/critMovies/:id", (req, res) => {
    const { id } = req.params
    const { name, peliculaFav, puntuacion } = req.body
    movieSchema
    .updateOne({_id: id}, { $set: {name, peliculaFav, puntuacion}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//Eliminar una critica
router.delete("/critMovies/:id", (req, res) => {
    const { id } = req.params
    movieSchema
    .remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

module.exports = router
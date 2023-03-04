const mongoose = require("mongoose")

const movieSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    peliculaFav:{
        type: String,
        required: true
    },
    puntuacion:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("critMovies", movieSchema)
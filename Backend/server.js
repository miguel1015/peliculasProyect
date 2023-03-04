const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()
const movieRoutes = require("./routes/pelis")
const cors = require("cors")

//middleware
app.use(express.json())
app.use(cors({origin:"*", credentials:true}))
app.use("/api", movieRoutes)
app.get("/", (req, res) => {
    res.send("<h1>critica de peliculas</h1>")
})




//conexion a base de datos
mongoose.set('strictQuery', false);
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("conectado a MognoDb ⭐"))
.catch((error) => console.error(error))


//configuracion basico
app.listen(5000,  () => {
    console.log("El localHost esta funcionando ✔");
})
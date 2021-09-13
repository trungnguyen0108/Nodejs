import express from "express"
import filmRouter from "./routes/film.js"
const app = express()
const PORT = 8080

app.use("/film",filmRouter)

app.listen (PORT)

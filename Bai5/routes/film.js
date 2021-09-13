import express from "express"

import {getFilms, postFilm, putFilm, deleteFilm} from "../controller/film.js"   

import { postFilmValidaton } from "../validations/films.js"

const filmRouter = express.Router()
filmRouter.use(express.json())

filmRouter.get("/", getFilms)

filmRouter.post("/", postFilmValidaton ,postFilm)

filmRouter.put("/", putFilm)

filmRouter.delete("/",deleteFilm)

export default filmRouter

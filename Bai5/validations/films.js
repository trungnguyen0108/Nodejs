import { body, validationResult } from "express-validator";

let postFilmValidaton = [
    body("img").exists(),body("content").exists(),body("title").exists(),
    (req,res,next) => {
        let error = validationResult(req)
        if (!error.isEmpty()) {
            res.status(400).json(error.array())
        }
        else{
            next()
        }
    }
]

export {postFilmValidaton}
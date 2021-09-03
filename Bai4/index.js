const express = require("express")
const helmet = require("helmet")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(helmet())
app.use(cors())

const POST = 8080

const book = {
    a1 :{
        author: "Võ Nguyên Giáp",
        year: "1975",
        title: "Những năm tháng không thể nào quên"
    },
    a2 : {
        author: "Lê Văn Nghĩa",
        year: "2021",
        title: "SÀI GÒN những mảng ghép rời ký ức"
    }
}

function randID() {
    return parseInt(Math.random() * 100000)
}

app.get("/book", (req,res) => {
    res.json(book)
})

app.get("/book/:id", (req, res) => {
    res.json(book[req.params.id])
})

app.post("/book", (req,res,next) =>{
    if (req.body.author === undefined){
        res.json({
            status: "fail",
            type: "Author name not available"
        })
    }
    next()
},
(req,res) => {
    let id = randID()
    book[id] = req.body
    res.json({
        status: "good",
        id: id
    })
})

app.put("/book/:id", (req,res,next) => {
    if (req.body.author === undefined){
    res.json({
        status: "fail",
        type: "Author name not available"
    })
}
    next()
},
(req,res) => {
    let id = randID()
    book[req.params.id] = req.body
    res.json({
        status: "good",
        id: id
    })
})

app.delete("/book/:id", (req,res) => {
    book[req.params.id] = undefined
    res.json({
        status: "good"
    })
})


app.listen(POST)
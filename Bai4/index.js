const express = require("express")

const app = express()
const POST = 8080

app.get("/", (req, res) => {
    res.send("<h1> Trung </h1>")
})

app.get("/json", (req , res) => {
    res.json({
        "name": "trung",
        "age": "20"
    })
})

app.listen(POST)
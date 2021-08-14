const fs = require("fs")
let element = []
let arr = []
let json
fs.readFile("thang.txt", (err, data) => {
    if (err) console.log(err)
    else {
        let myData = data.toString().split("\n")
        for (let line of myData) {
            arr.push(line.split("\t")[1])
            arr.push(line.split("\t")[3])
        }
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 == 0 && i < arr.length - 2) {
                element.push("\"" + arr[i] + "\"" + "\:\"" + arr[i + 1] + "\"" + ",")
            }
            else if (i == arr.length - 2) {
                element.push("\"" + arr[i] + "\"" + "\:\"" + arr[i + 1] + "\"")
            }
            json = "{" + element.join("\n") + "}"

        }
        fs.writeFile("trung.json", json, (err) => {
            if (err) { console.log(err) }
        })
    }

})
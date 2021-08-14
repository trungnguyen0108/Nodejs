const fs = require("fs")
let arr = []
let distance1 = []
let distance2 = []
let count1 = 0
let count2 = 0
fs.readFile("data.txt", (err, data) => {
    if (err) console.log(err)
    else {
        let myData = data.toString().split("\n")
        for (let line of myData) {
            arr.push(line.split(","))
        } 
        
        for (let i = 2; i < arr.length; i++) {
            distance1.push(Math.sqrt((arr[0][0] - arr[i][0]) ** 2 + (arr[0][1] - arr[i][1]) ** 2))
            distance2.push(Math.sqrt((arr[1][0] - arr[i][0]) ** 2 + (arr[1][1] - arr[i][1]) ** 2))
        }

        for (let e1 of distance1) {
            if (e1 < arr[0][2]) {
                count1++
            }
        }
        
        console.log(`co ${count1} diem nam trong hinh tron 1`)
        for (let e2 of distance2) {
            if (e2 < arr[0][2]) {
                count2++
            }
        }
        console.log(`co ${count2} diem nam trong hinh tron 2`)
    }
})

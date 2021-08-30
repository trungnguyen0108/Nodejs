import React, { useRef } from "react"
import "./app.css"

function Nhapnd() {
    const userInput = useRef()
    let result = []

    function test() {
        
        let data = userInput.current.value.split(" ")
        let timer = new Date(data[1])
        result.push(timer)
        var min = Math.min.apply(Math, result);

      
        let div = document.createElement("div")

        let label = document.createElement("label")
        let messsent = document.createTextNode(data[0])
        label.appendChild(messsent)

        let label1 = document.createElement("label")
        let messsent1 = document.createTextNode(min)
        label1.appendChild(messsent1)

        let input = document.createElement("input")
        input.type = "checkbox"
        input.name = "hobby"

        div.appendChild(input)
        div.appendChild(label)
        div.appendChild(label1)

        document.getElementsByTagName("div")[0].appendChild(div)
        
        result.push(min)
        console.log(result)
        
    }


    return (
        <div className="div">
            <input type="textarea" name="input" ref={userInput} placeholder="content year,month,day"></input>
            <input type="submit" value="submit" onClick={test}></input>
        </div>
    )
}

function App() {
    return (
        <>
            <Nhapnd></Nhapnd>
        </>
    )
}

export default App
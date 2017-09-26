import express from "express"
import data from "./data/data.json"

const PORT = 3000

const app = express()

app.get("/", (req, res)=>{
    let info = ""
    data.speakers.forEach((speaker)=>{
        info += `
        <li>
            <p>${speaker.name}</p>
            <p>${speaker.age}</p>
        </li>
        `
    })
    res.send(`<ul>${info}</ul>`)
})

const server = app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))
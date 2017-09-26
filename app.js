import express from "express"

const app = express()

app.get("/", (req, res)=> res.send("<h1>Salut de la Dani si Marius</h1>"))

const server = app.listen(3000, ()=> console.log("Server running on port 3000"))
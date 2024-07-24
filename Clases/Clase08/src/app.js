import express from "express"

const app = express()

const PUERTO = 8080

import usersRouter from "./routes/users.router.js"

import petsRouter from "./routes/pets.router.js"

//aca se envia información en formato json
app.use(express.json()) //middelware

app.use("/api/users", usersRouter)

app.use("/api/pets", petsRouter)


//listen

app.listen (PUERTO, () =>{
    console.log("escuchando")
})

//2) servicio de archivos estáticos 

//app.use(express.static("./src/public"))

app.use("/static", express.static("./src/public"))


import express from "express"

const express = require ("express")

const app = express()

const PUERTO = 8080

//middelware

app.use (express.json())


//fuente de datos


const clientes = [
    {id:"1", nombre:"pepe", apellido: "argento"},
    {id:"2", nombre:"pato", apellido: "argen"},
    {id:"3", nombre:"papa", apellido: "arge"},
    {id:"4", nombre:"pepa", apellido: "arg"}
]

//metodo GEt

app.get("/clientes", (req,res)=>{
    res.send(clientes)
})

//Metodo Post

app.post("/clientes", (req, res) => {
    const clienteNuevo = req.body

    clientes.push(clienteNuevo)

    console.log(clientes)

    res.send({status: "success", message: "cliente creado"})
}  )


//PUT

//crear en postman request - renombrar a put, colocar url http://localhost:8080/clientes
//

app.put("/clientes/:id", (req,res) => {
    const {id} = req.params
    const {nombre,apellido} = req.body

    let clienteIndex = clientes.findIndex(cliente => cliente.id === id )

    if (clienteIndex !== -1){
        clientes[clienteIndex].nombre = nombre
        clientes[clienteIndex].apellido = apellido
        
        res.send("cliente actualizado")
    } else {
        res.status(404).send({status:"error",message:"cliente no encontrado"})
    }

})

//en postman buscar raw y escribir { "nombre":"nombre nuevo", "apellido":"nuevo apellido"}

// get, recupera cliente por id
// http://localhost:8080/clientes/3  con el 5 debe decir el mensaje

app.get ("/clientes/:id", (req,res) => {
    let id = req.params.id
    let clienteBuscado = clientes.find(cliente => cliente.id === id )

    if (clienteBuscado) {
        return res.send(clienteBuscado)

    } else {
        return res.send("no se encuentra el cliente")
    }
})


//delete

app.delete("/clientes/:id", (req,res) => {
    const {id} = req.params

    let clienteIndex = clientes.findIndex(cliente => cliente.id === id )

    if (clienteIndex !== -1){
       clientes.splice(clienteIndex, 1)

       console.log(clientes)
        
        res.send({status:"ok",message:"cliente eliminado"})
    } else {
        res.status(404).send({status:"error",message:"cliente no encontrado"})
    }

})

app.listen(PUERTO,() =>{
    console.log(`Escuchando en el http://localhost:${PUERTO}`)
})
//importar el  modulo

const http = require ("http")

// servidor

const server = http.createServer( (request, response) =>{
    //despues se llamará req y res
        response.end("mi primer hola mundo")

})


//escuchar al servidor

const PUERTO = 8080

server.listen(PUERTO, () => {
    console.log(`escuchado en el puerto: ${PUERTO}`)
})

// instalar nodemon npm install nodemon -G

//  "scripts": {
//    "dev":"nodemon src/app.js"
//  },
//nuevas funcionalidades de Ecmascript 6

//desestructuración

const pelicula ={
    titulo: "El padrino",
    director:"Francis Ford Coppola",
    genero:"Drama",
    lanzamiento: 1972
}


//antes de ES6
let titulo = pelicula.titulo
console.log(titulo)

let {titulo:tituloPeli, director, genero, lanzamiento} = pelicula
console.log(tituloPeli) //tituloPeli es un alias porque titulo ya esta en uso

genero = "Terror"
console.log("la variabe genero dice:" + genero)

console.log(pelicula)

//con arrays

let numeros = [1,2,3,4,5]

//antes de ES6

let uno = numeros[0]
let dos = numeros[1]
console.log(uno,dos)

//con la llegada de ES6

let[, ,indiceDos,indiceTres,indiceCuatro] = numeros

//console.log(indiceCero)
//console.log(indiceUno)
console.log(indiceDos)
console.log(indiceTres)

//valores por defecto

function saludar(nombre = "Alumno") {
    console.log(`Hola ${nombre}`)
}

saludar ()
saludar ("Samuel")

//trabajo por modulos

import productosJota from "./datos.js"

console.log(productosJota)
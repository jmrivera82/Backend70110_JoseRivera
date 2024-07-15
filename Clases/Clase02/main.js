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

//ES7

//let resultado2 = base ** exponente
//console.log(resultado2)

//includes

const losSimpsons = ["Homero","Marge", "Bart", "Lisa", "Maggie"]

console.log(losSimpsons.indexOf("Marge")> -1)

console.log(losSimpsons.includes("Abuelo"))

//object.values devuelve un array

const empleado ={
    nombre:"Pepe",
    apellido:"Argento",
    edad:45,
    puesto:"vendedor"
}

const resultadoEmpleadoValues = Object.values(empleado)
console.log(resultadoEmpleadoValues)

const resultadoEmpleadoKeys = Object.keys(empleado)
console.log(resultadoEmpleadoKeys)

const resultadoEmpleadoEntries = Object.entries(empleado)
console.log(resultadoEmpleadoEntries)

//variables y metodos estaticos

class Contador {
    static cantidad = 0

    constructor () {
        Contador.cantidad++
    }

    static obtenerCantidad(){
        return Contador.cantidad
    }
}

const contador1 = new Contador()
const contador2 = new Contador()

console.log(Contador.obtenerCantidad()) //2 se suman las instancias

//ES9

let arrayNombres = ["nom1","nom2","nom3","nom4"]

console.log(...arrayNombres)

//usos comunes

const coky = {
    nombre : "coky",
    apellido:"argento",
    edad:18
}

const coky2 = coky

coky.edad = 35

console.log(coky)
console.log(coky2)

let numeritos = [1,2,3,4,5]
let numeritos2=[6,7,8,9,10]

console.log(numeritos+","+numeritos2)

let arrayConcatenado = [...numeritos,...numeritos2]
console.log(arrayConcatenado)

let arrayMulti = [1,2,3,[4,5,6,[7,8,9]]]

console.log(arrayMulti.flat(2))

//Trim

let fraseConEspacios = "   Hola, hoy es jueves    "

console.log(fraseConEspacios.trimStart())

console.log(fraseConEspacios.trimEnd())


//Nullish

let cliente = null

console.log(cliente ?? "Invitado")

const alumno = {
    nombre : "coky",
    apellido:"argento",
    edad:18
}

console.log(alumno.nombre)

let alu = null
console.log(alu?.nombre)
alert("hola, esto funciona")



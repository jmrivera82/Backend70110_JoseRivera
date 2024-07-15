//npm init para inicializar el proyecto o agregar --yes para todo por default

//modulos

//node src/app.js

//importando con commoJS

//const saludos = require("./saludos.js")


//saludos.temprano()
//saludos.tarde()
//saludos.noche()

//importamos con ES modules

import {temprano, tarde,noche} from "./saludos.js"

temprano()
tarde()
noche()
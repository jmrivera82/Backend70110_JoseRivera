//Calculadora de edad

import moment from "moment"

const fechaActual = moment()


const fechaNacimiento = moment ("1982-04-06")

if(fechaNacimiento.isValid()){
     const diasPasados = fechaActual.diff(fechaNacimiento,"days")
     console.log(`pasaron ${diasPasados} desde tu nacimiento hasta hoy`)
} else {
    console.log("la fecha no es valida")
}
const temprano = () => {
    console.log("buenos dias")
}

const tarde = () => {
    console.log("buenas tardes")
}

const noche = () => {
    console.log("buenas noches")
}


//de esta forma se exporta con commonJS

//module.exports ={
//    temprano,
//    tarde,
//    noche
//}


//exportamos con EsModules

export {temprano, tarde,noche}
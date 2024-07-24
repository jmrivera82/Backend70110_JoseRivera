import {Router} from "express"

const router = Router ()

const pets=[]

//rutas

router.get("/",(req,res) => {
    res.send(pets)
})


router.post("/",(req,res) => {
    const nuevaMascota = req.body
    
    pets.push(nuevaMascota)
    res.send({status:"sucess", message:"mascota creada"})
})


export default router
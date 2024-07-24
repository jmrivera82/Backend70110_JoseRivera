import {Router} from "express"

const router = Router ()


//arrays para almacenar usuarios y mascotas

const users=[]



//rutas para usuarios

router.get("/",(req,res) => {
    res.send(users)
})


router.post("/",(req,res) => {
    const nuevoUsuarios = req.body
    
    users.push(nuevoUsuarios)
    res.send({status:"sucess", message:"usuario reado correctamente"})
})

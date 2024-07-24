import { Router } from "express"

const router = Router ()

const carts = []

router.get("/", (req,res)=>{
    res.send(carts)
})

router.post("/", (req,res) => {
    const nuevoCart = req.body

    carts.push (nuevoCart)

    res.send({status:"sucess",message:"Carts creado correctamente"})
})

router.get('/:id', (req, res) => {
    res.send(`Carrito con ID: ${req.params.id}`)
  })
  
router.put('/:id', (req, res) => {
    res.send(`Actualizando el carrito con ID: ${req.params.id}`)
  })
  
router.delete('/:id', (req, res) => {
    res.send(`Eliminando el carrito con ID: ${req.params.id}`)
  })


export default router
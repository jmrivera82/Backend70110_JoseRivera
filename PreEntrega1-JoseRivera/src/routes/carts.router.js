import { Router } from "express"
import CartManager from  '../CartManager.js'

const router = Router ()
const cartManager = new CartManager()

router.get("/", (req,res)=>{
  const limit = parseInt(req.query.limit)
  const carts = cartManager.getAllCarts(limit)
  res.json(carts)
})

router.get('/:id', (req, res) => {
  const cart = cartManager.getCartById(req.params.id)
  if (cart) {
    res.json(cart)
  } else {
    res.status(404).send('Carrito no encontrado')
  }
})

// Ruta POST para crear un nuevo carrito
router.post('/', (req, res) => {
  const newCart = cartManager.addCart(req.body)
  res.status(201).json(newCart)
})

router.put('/:id', (req, res) => {
  const updatedCart = cartManager.updateCart(req.params.id, req.body)
  if (updatedCart) {
    res.json(updatedCart)
  } else {
    res.status(404).send('Carrito no encontrado')
  }
})

router.delete('/:id', (req, res) => {
  const deletedCart = cartManager.deleteCart(req.params.id)
  if (deletedCart) {
    res.json(deletedCart)
  } else {
    res.status(404).send('Carrito no encontrado')
  }
})

export default router
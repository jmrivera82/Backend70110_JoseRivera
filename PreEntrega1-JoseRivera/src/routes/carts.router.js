import { Router } from "express"
import CartManager from  '../CartManager.js'

const router = Router ()
const cartManager = new CartManager()



export default router
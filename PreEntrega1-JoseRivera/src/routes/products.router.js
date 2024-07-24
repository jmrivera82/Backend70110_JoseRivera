/*import { Router } from "express"
const router = Router ()
const products = []*/

const express = require('express')
const router = express.Router()
const ProductManager = require('../product-manager.js')
const productManager = new ProductManager()

//Listar productos

router.get("/", (req,res)=>{

    const limit = parseInt(req.query.limit)
    const products = productManager.getAllProducts(limit)
    res.json(products)})


// Ver producto por id

router.get('/:id', (req, res) => {
    const product = productManager.getProductById(req.params.id)
    if (product) {
      res.json(product)
    } else {
      res.status(404).send('Producto no encontrado')
    }
  })

//crear nuevo producto

router.post('/', (req, res) => {
    const newProduct = productManager.addProduct(req.body)
    res.status(201).json(newProduct)
  })


//Actualizar producto por id

router.put('/:id', (req, res) => {
    const updatedProduct = productManager.updateProduct(req.params.id, req.body)
    if (updatedProduct) {
      res.json(updatedProduct)
    } else {
      res.status(404).send('Producto no encontrado')
    }
  })

//Eliminar producto por ID

router.delete('/:id', (req, res) => {
    const deletedProduct = productManager.deleteProduct(req.params.id)
    if (deletedProduct) {
      res.json(deletedProduct)
    } else {
      res.status(404).send('Producto no encontrado')
    }
  })
  
module.exports = router
  

import { Router } from "express"
import ProductManager from '../productManager.js'


const router = Router ()
const productManager = new ProductManager()

//Listar productos

router.get("/", (req,res)=>{

    const limit = parseInt(req.query.limit)
    const products = productManager.getAllProducts(limit)
    res.json(products)
  })


// Ver producto por id

router.get('/:pid', (req, res) => {
    const product = productManager.getProductById(req.params.pid)
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

router.put('/:pid', (req, res) => {
    const updatedProduct = productManager.updateProduct(req.params.pid, req.body)
    if (updatedProduct) {
      res.json(updatedProduct)
    } else {
      res.status(404).send('Producto no encontrado')
    }
  })

//Eliminar producto por ID

router.delete('/:pid', (req, res) => {
    const deletedProduct = productManager.deleteProduct(req.params.pid)
    if (deletedProduct) {
      res.json(deletedProduct)
    } else {
      res.status(404).send('Producto no encontrado')
    }
  })
  
  router.post('/', (req, res) => {
    const { title, description, code, price, status, stock, category, thumbnails } = req.body;
    if (!title || !description || !code || !price || status === undefined || !stock || !category || !thumbnails) {
      return res.status(400).send('Faltan campos requeridos')
    }
  
    const newProduct = {
      title,
      description,
      code,
      price,
      status: status ?? true,
      stock,
      category,
      thumbnails: thumbnails || []
    }
  
    const addedProduct = productManager.addProduct(newProduct)
    res.status(201).json(addedProduct)
  })
  


export default router

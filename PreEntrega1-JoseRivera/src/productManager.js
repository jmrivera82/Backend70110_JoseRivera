class ProductManager {
  constructor() {
    this.products = [

      { id: 1, nombre: 'Manzana', precio: 3100 },
      { id: 2, nombre: 'Platano', precio: 1200 },
      { id: 3, nombre: 'Cebolla', precio: 2300 },
      
    ]
    this.nextId = this.products.length + 1
  }

  getAllProducts(limit) {
    return limit ? this.products.slice(0, limit) : this.products
  }

  getProductById(id) {
    return this.products.find(product => product.id === parseInt(id))
  }

  addProduct(product) {
    product.id = this.nextId++
    this.products.push(product)
    return product
  }

  updateProduct(id, updatedProduct) {
    const index = this.products.findIndex(product => product.id === parseInt(id));
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updatedProduct };
      return this.products[index]
    }
    return null
  }

  deleteProduct(id) {
    const index = this.products.findIndex(product => product.id === parseInt(id));
    if (index !== -1) {
      const deletedProduct = this.products.splice(index, 1)
      return deletedProduct[0]
    }
    return null
  }
}

export default ProductManager



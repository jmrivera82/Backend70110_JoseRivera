class ProductManager {
  constructor() {
    this.products = [

      { id: 1, title: 'Manzana', description: 'Royal', code: 'F001', price: 1900, status: true, stock: 40000, category: 'Fruta', thumbnails:'no img' },
      { id: 2, title: 'Platano', description: 'Dusal', code: 'F002', price: 1000, status: true, stock: 1200, category: 'Fruta', thumbnails:'no img' },
      { id: 3, title: 'Cebolla', description: 'Escabechera', code: 'V001', price: 2900, status: 'OK', stock: 300, category: 'Verdura', thumbnails:'no img' },
      { id: 4, title: 'Zapallo', description: 'amarillo', code: 'V002', price: 700, status: 'OK', stock: 54, category: 'Verdura', thumbnails:'no img' },      
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
    const newProduct = {
      id: this.nextId++,
      status: product.status ?? true,
      ...product

    }
    this.products.push(newProduct)
    return newProduct
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



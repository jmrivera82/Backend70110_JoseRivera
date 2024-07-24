class ProductManager {
    constructor() {
      this.products = [];
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      // Verificar que el código sea único
      if (this.products.find(product => product.code === code)) {
        throw new Error(`Product with code ${code} already exists.`);
      }
  
      const product = {
        id: this.products.length + 1,
        title: title,
        description: description,
        price: price,
        thumbnail: thumbnail,
        code: code,
        stock: stock
      };
      
      this.products.push(product);
      return product;
    }
  
    getProduct(id) {
      return this.products.find(product => product.id === id);
    }
  
    getAllProducts() {
      return this.products;
    }
  
    deleteProduct(id) {
      const index = this.products.findIndex(product => product.id === id);
      if (index !== -1) {
        this.products.splice(index, 1);
        return true;
      }
      return false;
    }
  }
  
  // Ejemplo de uso:
  const productManager = new ProductManager();
  
  try {
    productManager.addProduct('Manzana', 'Fruta', 1000, 'sin imagen', 'no code', 150)
    productManager.addProduct('Platano', 'Fruta', 1990, 'sin imagen', 'no code', 2200)
    productManager.addProduct('Uvas', 'Fruta', 3990, 'sin imagen', 'no code', 4200)
    productManager.addProduct('Papas', 'Verdura', 990, 'sin imagen', 'no code', 2100)
    productManager.addProduct('Cebolla', 'Verdura', 1090, 'sin imagen', 'no code', 5200)
    productManager.addProduct('Zapallo', 'Verdura', 5000, 'sin imagen', 'no code', 7200)

  } catch (error) {
    console.error(error.message)
  }
  
  console.log(productManager.getAllProducts())
  console.log(productManager.getProduct(1))
  
  //productManager.deleteProduct(1);
  //console.log(productManager.getAllProducts())
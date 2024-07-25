class CartManager {
    constructor() {
      this.carts = [
        { id: 1, items: [{ productId: 1, quantity: 2 }] },
        { id: 2, items: [{ productId: 2, quantity: 1 }] },
        // Puedes agregar más carritos aquí
      ];
      this.nextId = this.carts.length + 1;
    }
  
    getAllCarts(limit) {
      return limit ? this.carts.slice(0, limit) : this.carts;
    }
  
    getCartById(id) {
      return this.carts.find(cart => cart.id === parseInt(id));
    }
  
    addCart(cart) {
      cart.id = this.nextId++;
      this.carts.push(cart);
      return cart;
    }
  
    updateCart(id, updatedCart) {
      const index = this.carts.findIndex(cart => cart.id === parseInt(id));
      if (index !== -1) {
        this.carts[index] = { ...this.carts[index], ...updatedCart };
        return this.carts[index];
      }
      return null;
    }
  
    deleteCart(id) {
      const index = this.carts.findIndex(cart => cart.id === parseInt(id));
      if (index !== -1) {
        const deletedCart = this.carts.splice(index, 1);
        return deletedCart[0];
      }
      return null;
    }
  }
  
  export default CartManager;
  
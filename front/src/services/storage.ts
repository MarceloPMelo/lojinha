import type { Product } from "../types/Product";

const CART_KEY = '@lojinha:cart';
const PRODUCTS_KEY = '@lojinha:products';

export const storage = {
  // Carrinho
  getCart(): Product[] {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
  },

  addToCart(product: Product) {
    const cart = this.getCart();
    cart.push(product);
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  },

  removeFromCart(productId: number) {
    const cart = this.getCart();
    const updatedCart = cart.filter(item => item.id !== productId);
    localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
  },

  clearCart() {
    localStorage.setItem(CART_KEY, JSON.stringify([]));
  },

  // Produtos
  getProducts(): Product[] {
    const products = localStorage.getItem(PRODUCTS_KEY);
    return products ? JSON.parse(products) : [];
  },

  setProducts(products: Product[]) {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
  },

  addProduct(product: Product) {
    const products = this.getProducts();
    products.push(product);
    this.setProducts(products);
  },

  updateProduct(updatedProduct: Product) {
    const products = this.getProducts();
    const index = products.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      products[index] = updatedProduct;
      this.setProducts(products);
    }
  },

  deleteProduct(productId: number) {
    const products = this.getProducts();
    const updatedProducts = products.filter(p => p.id !== productId);
    this.setProducts(updatedProducts);
  }
} 
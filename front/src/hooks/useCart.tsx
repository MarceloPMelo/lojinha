import { useState, useEffect } from 'react'
import { Product } from '../types/Product'
import { storage } from '../services/storage'

export function useCart() {
  const [cart, setCart] = useState<Product[]>([])

  // Carrega o carrinho do storage quando o componente monta
  useEffect(() => {
    const storedCart = storage.getCart()
    setCart(storedCart)
  }, [])

  const addToCart = (product: Product) => {
    const updatedCart = [...cart, product]
    setCart(updatedCart)
    storage.addToCart(product)
  }

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter(item => item.id !== productId)
    setCart(updatedCart)
    storage.removeFromCart(productId)
  }

  const clearCart = () => {
    setCart([])
    storage.clearCart()
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0)
  }

  const getCartItemCount = () => {
    return cart.length
  }

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartItemCount
  }
} 
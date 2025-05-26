// hooks/useCarrinho.ts
import { useEffect, useState } from "react"
import type { Product } from "../types/Product"
import { storage } from "../services/storage"

export function useCarrinho() {
  const [carrinho, setCarrinho] = useState<Product[]>([])

  useEffect(() => {
    const storedCart = storage.getCart()
    setCarrinho(storedCart)
  }, [])

  function adicionar(product: Product) {
    if (carrinho.some(p => p.id === product.id)) {
      alert("Produto já está no carrinho")
      return false
    } else {
      setCarrinho([...carrinho, product])
      storage.addToCart(product)
      return true
    }
  }

  function remover(product: Product) {
    if (carrinho.some(p => p.id === product.id)) {
      setCarrinho(carrinho.filter(p => p.id !== product.id))
      storage.removeFromCart(product.id)
    } else {
      alert("Produto não encontrado no carrinho")
    }
  }

  function limparCarrinho() {
    setCarrinho([])
    storage.clearCart()
  }

  return { carrinho, adicionar, remover, limparCarrinho }
}
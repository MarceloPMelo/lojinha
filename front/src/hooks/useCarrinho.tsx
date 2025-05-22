// hooks/useCarrinho.ts
import { useState } from "react"
import type { Product } from "../componets/CardProduct"

export function useCarrinho() {
  const [carrinho, setCarrinho] = useState<Product[]>([])

  function adicionar(product: Product) {
    if (carrinho.some(p => p.id === product.id)) {
      alert("Produto já adicionado ao carrinho")
      return
    }
    setCarrinho([...carrinho, product])
  }

  return { carrinho, adicionar }
}
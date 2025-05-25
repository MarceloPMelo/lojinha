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

  function remover(product: Product) {
    if (carrinho.some(p => p.id === product.id)) {
      setCarrinho(carrinho.filter(p => p.id !== product.id))
    } else {
      alert("Produto não encontrado no carrinho")
    }
  }

  function limparCarrinho() {
    setCarrinho([])
  }

  return { carrinho, adicionar, remover, limparCarrinho }
}
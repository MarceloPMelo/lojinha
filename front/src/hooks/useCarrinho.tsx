// hooks/useCarrinho.ts
/**
 * Hook para gerenciamento do carrinho de compras
 * Responsável por adicionar, remover e limpar itens do carrinho
 * Mantém sincronização com o localStorage através do serviço storage
 */

import { useEffect, useState } from "react"
import type { Product } from "../types/Product"
import { storage } from "../services/storage"

export function useCarrinho() {
  const [carrinho, setCarrinho] = useState<Product[]>([])

  // Carrega o carrinho do localStorage ao inicializar
  useEffect(() => {
    const storedCart = storage.getCart()
    setCarrinho(storedCart)
  }, [])

  /**
   * Adiciona um produto ao carrinho
   * @param product Produto a ser adicionado
   * @returns true se o produto foi adicionado, false se já existia
   */
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

  /**
   * Remove um produto do carrinho
   * @param product Produto a ser removido
   */
  function remover(product: Product) {
    if (carrinho.some(p => p.id === product.id)) {
      setCarrinho(carrinho.filter(p => p.id !== product.id))
      storage.removeFromCart(product.id)
    } else {
      alert("Produto não encontrado no carrinho")
    }
  }

  /**
   * Limpa todos os itens do carrinho
   */
  function limparCarrinho() {
    setCarrinho([])
    storage.clearCart()
  }

  return { carrinho, adicionar, remover, limparCarrinho }
}
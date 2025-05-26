import { useEffect, useState } from "react"
import type { Product } from "../types/Product"

export function useProductDetails(productId: number | undefined) {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!productId) {
      setError('ID do produto é inválido')
      setLoading(false)
      return
    }

    if (isNaN(Number(productId))) {
      setError('ID do produto deve ser um número')
      setLoading(false)
      return
    }

    setLoading(true)
    setError(null)
    
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Produto não encontrado (${response.status})`)
        }
        return response.json()
      })
      .then(data => {
        if (!data) {
          throw new Error('Produto não encontrado')
        }
        setProduct(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message || 'Erro ao carregar o produto')
        setLoading(false)
      })
  }, [productId])

  return { product, loading, error }
}

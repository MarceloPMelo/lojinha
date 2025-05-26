import { useEffect, useState } from "react"
import type { Product } from "../../../types/Product"

export function useProductDetails(productId: number) {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data)
        setLoading(false)
      })
      .catch(err => {
        setError('Erro ao carregar o produto')
        setLoading(false)
      })
  }, [productId])

  return { product, loading, error }
}

import { useEffect, useState } from "react"
import type { Product } from "../components/CardProduct"

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data)
      })    
  }, [])

  function filterProducts(category: string) {
    setProducts(products.filter(p => p.category !== category))
  }

  return { products, filterProducts }
}
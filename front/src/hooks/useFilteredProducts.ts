import { useMemo, useState } from 'react'
import type { Product } from '../types/Product'

export function useFilteredProducts(products: Product[]) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return products

    const searchTermLower = searchTerm.toLowerCase()
    return products.filter(product => 
      product.title.toLowerCase().includes(searchTermLower) ||
      product.description?.toLowerCase().includes(searchTermLower) ||
      product.category?.toLowerCase().includes(searchTermLower)
    )
  }, [products, searchTerm])

  return {
    filteredProducts,
    searchTerm,
    setSearchTerm
  }
} 
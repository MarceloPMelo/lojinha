import { useEffect, useState } from "react"
import type { Product } from "../types/Product"
import { storage } from "../services/storage"

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Primeiro, tenta carregar do storage local
    const storedProducts = storage.getProducts()
    if (storedProducts.length > 0) {
      setProducts(storedProducts)
      setLoading(false)
      return
    }

    // Se não houver produtos no storage, carrega da API
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data)
        // Salva os produtos no storage local
        storage.setProducts(data)
        setLoading(false)
      })    
  }, [])

  function filterProducts(category: string) {
    const filtered = products.filter(p => p.category !== category)
    setProducts(filtered)
    // Atualiza o storage local
    storage.setProducts(filtered)
  }

  function addProduct(product: Product) {
    const newProducts = [...products, product]
    setProducts(newProducts)
    storage.setProducts(newProducts)
  }

  function updateProduct(updatedProduct: Product) {
    const newProducts = products.map(p => 
      p.id === updatedProduct.id ? updatedProduct : p
    )
    setProducts(newProducts)
    storage.setProducts(newProducts)
  }

  function deleteProduct(productId: number) {
    const newProducts = products.filter(p => p.id !== productId)
    setProducts(newProducts)
    storage.setProducts(newProducts)
  }

  return { 
    products, 
    loading,
    filterProducts,
    addProduct,
    updateProduct,
    deleteProduct
  }
}
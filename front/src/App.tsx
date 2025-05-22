import type { Product } from './componets/CardProduct'
import { ProductList } from "./componets/ProductList"
import { Carrinho } from "./componets/carrinho"

//Hooks
import { useCarrinho } from "./hooks/useCarrinho"
import { useState, useEffect } from 'react'


function App() {

  // Define the initial state for the products and the cart
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    // Fetch the products from the API
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data)
      })
      .catch(error => {
        console.error('Error fetching products:', error)
      })
  }, [])


  const { carrinho, adicionar } = useCarrinho()

  return (
    <div>
      <ProductList products={products} onAdd={adicionar} />
      <Carrinho items={carrinho} />
    </div>
  )

}

export default App

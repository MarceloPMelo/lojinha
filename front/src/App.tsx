import type { Product } from './componets/CardProduct'
import { ProductList } from "./componets/ProductList"
import { Carrinho } from "./componets/Carrinho"

//Hooks
import { useCarrinho } from "./hooks/useCarrinho"
import { useState, useEffect } from 'react'


function App() {

  // Define the initial state for the products and the cart
  const [products, setProducts] = useState<Product[]>([])
  const { carrinho, adicionar } = useCarrinho()

  console.log('Carrinho modificado')

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

  return (
    <div>
      <Carrinho items={carrinho} />
      <ProductList products={products} onAdd={adicionar} />
    </div>
  )

}

export default App

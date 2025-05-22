import { useState } from 'react'
import { Button } from "./componets/button"
import { CardProduct } from "./componets/product"
import type { Product } from './componets/product'


function App() {

  const products: Product[] = [
    { id: 1, name: "Product 1", description: "This is product 1", price: 10 },
    { id: 2, name: "Product 2", description: "This is product 2", price: 20 },
    { id: 3, name: "Product 3", description: "This is product 3", price: 30 }
  ]

  const [carrinho, setCarrinho] = useState<Product[]>([])


  function adicionar(product: Product) {
    if (carrinho.some(p => p.id === product.id)) {
      alert("Produto já adicionado ao carrinho")
      return
    }
    setCarrinho([...carrinho, product])
    console.log(carrinho)
  }
  return (
    <div>
      <div>
        {products.map(product => {
          return (
            <div key={product.id} >
              <CardProduct {...product} />
              <Button label="Adicionar ao carrinho" onClick={() => adicionar(product)} />
            </div>
          );
        })}
      </div>
      <div>
        <h2>Carrinho</h2>
        {carrinho.length === 0 ? (
          <p>Seu carrinho está vazio</p>
        ) : (
          <ul>
            {carrinho.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

}

export default App

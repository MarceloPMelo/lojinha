import { useState } from 'react'
import { Button } from "./componets/button"
import { CardProduct} from "./componets/product"
import type { Product } from './componets/product'


function App() {

  const products: Product[] = [
    { id: 1, name: "Product 1", description: "This is product 1", price: 10 },
    { id: 2, name: "Product 2", description: "This is product 2", price: 20 },
    { id: 3, name: "Product 3", description: "This is product 3", price: 30 }
  ]

  const [carrinho, setCarrinho] = useState<string[]>([])
  

  function adicionar(product: string ) {
    setCarrinho([...carrinho, product])
    console.log(carrinho)
  }
  return (
    <div>
      {products.map(product => {
        return (
          <div key={product.id} >
            <CardProduct {...product} />
            <Button label="Adicionar ao carrinho" onClick={() => adicionar(product.name)} />  
          </div>
        );
      })}
    </div>
  );
  
}

export default App

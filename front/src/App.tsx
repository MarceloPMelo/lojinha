// Importação dos componentes necessários
import type { Product } from './componets/CardProduct'
import { ProductList } from "./componets/ProductList"
import { Carrinho } from "./componets/Carrinho"
import { Header } from "./componets/Header"

// Importação dos hooks do React e hooks customizados
import { useCarrinho } from "./hooks/useCarrinho"
import { useState, useEffect } from 'react'

function App() {
  // Estados da aplicação
  const [products, setProducts] = useState<Product[]>([]) // Lista de produtos da API
  const { carrinho, adicionar } = useCarrinho() // Hook customizado para gerenciar o carrinho
  const [isCartOpen, setIsCartOpen] = useState(false) // Controla a visibilidade do carrinho

  console.log('Carrinho modificado')

  // Efeito para carregar os produtos da API quando o componente montar
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data)
      })
      .catch(error => {
        console.error('Error fetching products:', error)
      })
  }, []) // Array vazio significa que o efeito só roda uma vez na montagem

  return (
    <div className="min-h-screen bg-white" style={{width: '100vw'}}>
      {/* Header com função para abrir o carrinho */}
      <Header onOpenCart={() => setIsCartOpen(true)} />

      {/* Componente do carrinho com estado de visibilidade e função para fechar */}
      <Carrinho 
        items={carrinho} 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      {/* Container principal */}
      <main className="w-full px-4 py-8">
        <ProductList products={products} onAdd={adicionar} />
      </main>
    </div>
  )
}

export default App

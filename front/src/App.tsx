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
    <div className="min-h-screen bg-gray-100">
      {/* Header com função para abrir o carrinho */}
      <Header onOpenCart={() => setIsCartOpen(true)} />

      {/* Componente do carrinho com estado de visibilidade e função para fechar */}
      <Carrinho 
        items={carrinho} 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      {/* Container principal com largura máxima e padding responsivo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <main className="py-8 flex flex-col items-center space-y-8">
          <div className="w-full max-w-4xl">
            {/* Lista de produtos com função para adicionar ao carrinho */}
            <ProductList products={products} onAdd={adicionar} />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App

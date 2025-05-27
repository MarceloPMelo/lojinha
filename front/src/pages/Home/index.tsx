// Importação dos componentes necessários
import { ProductList } from "../../components/ProductList"
import { Carrinho } from "../../components/Carrinho"
import { Header } from "../../components/Header"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Importação dos hooks do React e hooks customizados
import { useCarrinho } from "../../hooks/useCarrinho"
import { useProducts } from "../../hooks/useProducts"
import { useFilteredProducts } from "../../hooks/useFilteredProducts"
import { useState } from 'react'

function App() {
  // Estados da aplicação
  const {products} = useProducts() // Lista de produtos da API
  const { carrinho, adicionar, remover, limparCarrinho } = useCarrinho() // Hook customizado para gerenciar o carrinho
  const [isCartOpen, setIsCartOpen] = useState(false) // Controla a visibilidade do carrinho
  const { filteredProducts, searchTerm, setSearchTerm } = useFilteredProducts(products)

  

  return (
    <div className="min-h-screen bg-white" style={{width: '100vw'}}>
      {/* Header com função para abrir o carrinho e buscar produtos */}
      <Header 
        onOpenCart={() => setIsCartOpen(true)} 
        onSearch={setSearchTerm}
        searchTerm={searchTerm}
      />

      {/* Componente do carrinho com estado de visibilidade e função para fechar */}
      <Carrinho 
        items={carrinho} 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onRemove={remover}
        onClear={limparCarrinho}
      />

      {/* Container principal */}
      <main className="w-full px-4 py-8">
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500 mt-8">
            Nenhum produto encontrado para "{searchTerm}"
          </p>
        ) : (
          <ProductList products={filteredProducts} onAdd={adicionar} />
        )}
      </main>

      {/* Container de notificações */}
      <ToastContainer />
    </div>
  )
}
export default App


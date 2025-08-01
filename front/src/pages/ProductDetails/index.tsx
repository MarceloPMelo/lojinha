import { useParams } from 'react-router-dom'
import { useProductDetails } from '../../hooks/useProductDetails'
import { useCarrinho } from '../../hooks/useCarrinho'
import { Header } from "../../components/Header"
import { Carrinho } from "../../components/Carrinho"
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

export function ProductDetails() {
  const { id } = useParams<{ id: string }>()
  const { product, loading, error } = useProductDetails(id ? Number(id) : undefined)
  const { carrinho, adicionar, remover, limparCarrinho } = useCarrinho()
  const [isCartOpen, setIsCartOpen] = useState(false)

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Carregando...</div>
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen text-red-500">{error}</div>
  }

  if (!product) {
    return <div className="flex justify-center items-center min-h-screen">Produto não encontrado</div>
  }

  const handleAddToCart = () => {
    if (adicionar(product)){
      toast.success('Produto adicionado ao carrinho!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
      
    }
  }

  return (
    <div className="min-h-screen bg-white" style={{width: '100vw'}}>
      <Header 
        onOpenCart={() => setIsCartOpen(true)}
        showSearch={false}
      />

      <Carrinho 
        items={carrinho}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onRemove={remover}
        onClear={limparCarrinho}
      />

      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[calc(100vh-64px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
          <div className="flex justify-center items-center">
            <img 
              src={product.image} 
              alt={product.title} 
              className="max-w-full h-auto object-contain max-h-[500px]"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-gray-600">{product.description}</p>
            <div className="text-2xl font-semibold text-green-600">
              R$ {product.price.toFixed(2)}
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded-lg">
              <span className="text-gray-700">Categoria: </span>
              <span className="font-medium">{product.category}</span>
            </div>
            <button 
              onClick={handleAddToCart}
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors mt-4"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
      {/* Container de notificações */}
      <ToastContainer />
    </div>
  )
}

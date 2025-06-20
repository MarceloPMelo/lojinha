import { useCarrinho } from "../hooks/useCarrinho"
import type { Product } from "../types/Product"


type DetailsProps = {
    product: Product
  }

export function Details({ product }: DetailsProps) {
    const { adicionar } = useCarrinho()

    const handleAddToCart = () => {
        adicionar(product)
        alert('Produto adicionado ao carrinho!')
    }

    return (
    
        <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
    )
}
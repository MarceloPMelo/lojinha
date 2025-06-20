import type { Product } from "../types/Product"


interface Props {
    item: Product
    onRemove: (product: Product) => void
}



export function CardCarrinho({item, onRemove}: Props) {
    return (
        <li key={item.id} className="flex items-center gap-4 p-2 border-b">
                    {/* Imagem do produto */}
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-16 h-16 object-contain rounded bg-white"
                    />
                    {/* Informações do produto */}
                    <div className="flex-1">
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                    {/* Botão de remover */}
                    <button 
                      onClick={() => onRemove(item)} 
                      className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                      title="Remover item"
                    >
                      <svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
                        />
                      </svg>
                    </button>
                  </li>
    )

}
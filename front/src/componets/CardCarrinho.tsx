import type { Product } from "./CardProduct"


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
                    <button onClick={() => onRemove(item)} className="p-2 hover:bg-gray-100 rounded-full">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                  </li>
    )

}
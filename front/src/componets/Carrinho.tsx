// components/Carrinho.tsx
import type { Product } from "./CardProduct"
import { CardCarrinho } from "./CardCarrinho"

// Interface que define as props do componente
type Props = {
  items: Product[]     // Array de produtos no carrinho
  isOpen: boolean      // Estado de visibilidade do carrinho
  onClose: () => void // Função para fechar o carrinho
  onRemove: (product: Product) => void
  onClear: () => void
}

export function Carrinho({ items, isOpen, onClose, onRemove, onClear }: Props) {
  return (
    <>
      {/* Overlay escuro que aparece atrás do carrinho */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40"
          onClick={onClose} // Fecha o carrinho ao clicar no overlay
        />
      )}

      {/* Drawer deslizante do carrinho */}
      <div className={`
        fixed top-0 right-0 h-full w-96 max-w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : 'translate-x-full'} // Controla a animação de entrada/saída
      `}>
        {/* Layout em coluna com altura total */}
        <div className="flex flex-col h-full">
          {/* Cabeçalho do carrinho */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold">Carrinho</h2>
            {/* Botão de fechar */}
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Área de conteúdo com rolagem */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              // Mensagem quando o carrinho está vazio
              <p className="text-gray-500 text-center">Seu carrinho está vazio</p>
            ) : (
              // Lista de itens do carrinho
              <ul className="space-y-4">
                {items.map(item => (
                  <CardCarrinho key={item.id} item={item} onRemove={onRemove} />
                ))}
              </ul>
            )}
          </div>

          {/* Rodapé com total e botão de finalizar (só aparece se houver itens) */}
          {items.length > 0 && (
            <div className="border-t p-4">
              {/* Total da compra */}
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Total:</span>
                <span className="font-semibold">
                  ${items.reduce((total, item) => total + item.price, 0).toFixed(2)}
                </span>
              </div>
              {/* Botão de finalizar compra */}
              <button
                onClick={onClear}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                Finalizar Compra
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

import { SearchInput } from './SearchInput'

// Interface que define as props do componente
type HeaderProps = {
  onOpenCart: () => void // Função para abrir o carrinho
  onSearch?: (term: string) => void // Função para filtrar produtos (opcional)
  searchTerm?: string // Termo de busca atual (opcional)
  showSearch?: boolean // Controla se o campo de busca deve ser exibido
}

export function Header({ onOpenCart, onSearch, searchTerm, showSearch = true }: HeaderProps) {
  return (
    // Header fixo no topo com fundo escuro e sombra
    <header className="bg-gray-800 text-white p-4 shadow-md">
      {/* Container com largura máxima e padding responsivo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex container para alinhar título, busca e botão do carrinho */}
        <div className="flex justify-between items-center gap-4">
          {/* Título da aplicação */}
          <h1 className="text-2xl font-bold whitespace-nowrap">Loja-Marcelo</h1>
          
          {/* Campo de busca */}
          {showSearch && onSearch && searchTerm !== undefined && (
            <div className="flex-1 max-w-xl">
              <SearchInput
                value={searchTerm}
                onChange={onSearch}
                placeholder="Buscar produtos..."
              />
            </div>
          )}
          
          {/* Botão do carrinho com efeito hover */}
          <button 
            onClick={onOpenCart}
            className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
          >
            {/* Ícone do carrinho em SVG */}
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
} 
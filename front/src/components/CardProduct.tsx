import { Link } from 'react-router-dom';
import type { Product } from "../types/Product";

interface CardProductProps extends Product {
  onAddToCart: () => void;
}

export function CardProduct({
  id,
  title,
  description,
  category,
  price,
  image,
  onAddToCart
}: CardProductProps) {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Imagem com overlay no hover */}
      <Link to={`/product/${id}`} className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={title} 
          className="object-contain w-full h-full p-4 transition-transform duration-300 group-hover:scale-105"
        />
        {/* Badge da categoria */}
        <span className="absolute top-2 left-2 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
          {category}
        </span>
      </Link>

      {/* Conteúdo do card */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Título do produto */}
        <Link to={`/product/${id}`} className="hover:text-blue-600">
          <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 min-h-[3.5rem]">
            {title}
          </h2>
        </Link>

        {/* Descrição */}
        <p className="mt-2 text-sm text-gray-600 line-clamp-2 flex-grow">
          {description}
        </p>

        {/* Área de preço e botão */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          {/* Preço */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl font-bold text-gray-900">
              ${price.toFixed(2)}
            </span>
          </div>

          {/* Botão de adicionar ao carrinho */}
          <button
            onClick={onAddToCart}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg 
                     transition-colors duration-200 flex items-center justify-center gap-2"
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
              />
            </svg>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}

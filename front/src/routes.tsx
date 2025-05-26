import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import { ProductDetails } from './pages/ProductDetails'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />, // Página inicial - Lista de produtos
  },
  {
    path: '/product/:id', // :id é um parâmetro dinâmico que representa o ID do produto
    element: <ProductDetails />, // Página de detalhes do produto
  }
]) 
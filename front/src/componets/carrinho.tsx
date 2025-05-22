// components/Carrinho.tsx
import type { Product } from "./CardProduct"

type Props = {
  items: Product[]
}

export function Carrinho({ items }: Props) {
  return (
    <div>
      <h2>Carrinho</h2>
      {items.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

import { Button } from "./Button";
import "./CardProduct.css";
import './index.css'


export interface Product {
  id: number;
  title: string;
  price: number; // <-- Corrija de GLfloat para number!
  description: string;
  category: string;
  image: string;
}

interface CardProductProps extends Product {
  onAddToCart: () => void;
}

export function CardProduct({
  title,
  description,
  category,
  price,
  image,
  onAddToCart
}: CardProductProps) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <img src={image} alt={title} className="card-img" />
      <p>Price: ${price}</p>
      <p>{description}</p>
      <p>{category}</p>
      <Button label="Adicionar ao carrinho" onClick={onAddToCart} />
    </div>
  );
}

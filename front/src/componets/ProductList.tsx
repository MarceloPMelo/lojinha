import { CardProduct } from "./CardProduct";
import type { Product } from "./CardProduct";
import "./ProductList.css";
import './index.css'


type Props = {
  products: Product[];
  onAdd: (product: Product) => void;
};

export function ProductList({ products, onAdd }: Props) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <CardProduct
          key={product.id}
          {...product}
          onAddToCart={() => onAdd(product)}
        />
      ))}
    </div>
  );
}

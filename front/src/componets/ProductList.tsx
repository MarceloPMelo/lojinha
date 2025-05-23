import { CardProduct } from "./CardProduct";
import type { Product } from "./CardProduct";

type Props = {
  products: Product[];
  onAdd: (product: Product) => void;
};

export function ProductList({ products, onAdd }: Props) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

export interface Product {
  
    id: number;
    name: string;
    description: string;
    price: number;
}

// The Product component takes in a product object as a prop and displays its details.
export function CardProduct( product: Product) {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button></button>
    </div>
  );
}
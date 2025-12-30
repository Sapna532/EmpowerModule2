import { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

function App() {
  const [count, setCount] = useState(0);

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 }
  ];

  // useMemo → expensive calculation
  const totalPrice = useMemo(() => {
    console.log("Calculating total price");
    return products.reduce((sum, p) => sum + p.price, 0);
  }, [products]);

  // useCallback → stable function reference
  const handleSelectProduct = useCallback((product) => {
    console.log("Selected:", product.name);
  }, []);

  return (
    <div>
      <h2>Total Price: ₹{totalPrice}</h2>

      <button onClick={() => setCount(count + 1)}>
        Counter: {count}
      </button>

      <ProductList
        products={products}
        onSelectProduct={handleSelectProduct}
      />
    </div>
  );
}

export default App;

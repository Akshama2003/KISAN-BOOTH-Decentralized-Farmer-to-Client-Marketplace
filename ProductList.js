import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductList({ contract, account }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const count = await contract.methods.productCount().call();
      let items = [];
      for (let i = 1; i <= count; i++) {
        const p = await contract.methods.products(i).call();
        if (!p.sold) items.push(p);
      }
      setProducts(items);
    }
    fetchProducts();
  }, [contract]);

  return (
    <div>
      <h2>Available Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} contract={contract} account={account} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;

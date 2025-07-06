import React from "react";

function ProductCard({ product, contract, account }) {
  async function buy() {
    await contract.methods.buyProduct(product.id).send({
      from: account,
      value: product.price
    });
    alert("Bought successfully!");
  }

  return (
    <div style={{ border: "1px solid #333", margin: 10, padding: 10, width: 250 }}>
      <img src={product.image} alt={product.name} width="100%" style={{ borderRadius: 10 }} />
      <h3>{product.name}</h3>
      <p>Price: {window.web3.utils.fromWei(product.price, 'ether')} ETH</p>
      <p>Transport: {product.transportPreference}</p>
      <button onClick={buy}>Buy Directly</button>
    </div>
  );
}

export default ProductCard;

import React, { useState } from "react";

function FarmerRegister({ contract, account }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [transport, setTransport] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    await contract.methods
      .registerProduct(name, image, window.web3.utils.toWei(price, 'ether'), transport)
      .send({ from: account });
    alert("Product registered!");
  }

  return (
    <form onSubmit={handleRegister}>
      <h2>Register Your Product</h2>
      <input placeholder="Product Name" value={name} onChange={e => setName(e.target.value)} required />
      <input placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} required />
      <input placeholder="Price (ETH)" value={price} onChange={e => setPrice(e.target.value)} required />
      <input placeholder="Transport Preference" value={transport} onChange={e => setTransport(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
}

export default FarmerRegister;

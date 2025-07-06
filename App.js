import React, { useEffect, useState } from "react";
import web3 from "./web3";
import KisanBooth from "./contracts/KisanBooth.json";
import FarmerRegister from "./components/FarmerRegister";
import ProductList from "./components/ProductList";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);

  useEffect(() => {
    async function load() {
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = KisanBooth.networks[networkId];
      const instance = new web3.eth.Contract(
        KisanBooth.abi,
        deployedNetwork && deployedNetwork.address
      );
      setContract(instance);
    }
    load();
  }, []);

  if (!contract) return <div>Loading...</div>;

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#388e3c" }}>KISAN-BOOTH</h1>
      <img src="/images/farmer-culture.jpg" style={{ width: "100%", maxHeight: 250, objectFit: "cover" }} alt="Indian Farmer Culture" />
      <FarmerRegister contract={contract} account={account} />
      <ProductList contract={contract} account={account} />
    </div>
  );
}

export default App;

# KISAN-BOOTH: Decentralized Farmer-to-Client Marketplace

A decentralized platform where Indian farmers can sell their fresh produce directly to clients, eliminating middlemen. The application leverages blockchain/Web3 for transparent and direct payments.

## Features

- **Farmer Registration:** Farmers list their products, upload images, and set transport preferences.
- **Direct Marketplace:** Clients browse and purchase directly from farmers.
- **Decentralized Payments:** Payments are sent straight to farmers' accounts using blockchain.
- **Cultural Touch:** UI features Indian farmer and cultural images.
- **Transport Coordination:** Farmers specify delivery or pickup preferences.

## Tech Stack

- **Frontend:** React.js
- **Smart Contract:** Solidity (Ethereum compatible)
- **Web3 Integration:** ethers.js or web3.js
- **Image Storage:** Supports URL-based images (optionally IPFS)

## Getting Started

1. **Clone the repository**
2. **Install dependencies:**  
   `npm install`
3. **Compile/deploy smart contracts:**  
   Use Truffle/Hardhat and update the ABI/address in the frontend.
4. **Run the frontend:**  
   `npm start`
5. **Connect MetaMask and interact!**

---

## Project Structure

```
contracts/           # Solidity smart contracts
public/images/       # Indian farmer/cultural images
src/components/      # React components
src/web3.js          # Web3 connection utility
src/App.js           # Main React app
```

---

## Notes

- Images for the UI should be placed in `public/images/` (example: `farmer-culture.jpg`).
- Transport logic is basic for now: farmers specify preference at listing time.
- Payments are direct; no intermediaries.

---

## Future Enhancements

- Integrate IPFS for decentralized image storage.
- Add third-party logistics for transport.
- Farmer KYC/verification.
- Enhanced UI/UX and mobile compatibility.

# 🚀 Blockchain Engineering Assessment: API Data Fetcher

This project demonstrates a decentralized application (dApp) backend integration. It features a custom **Node.js/Express API endpoint** that interacts with a pre-deployed smart contract on the **Ethereum Mainnet** using the **Alchemy RPC** provider.

---

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js (API routing)
* **Blockchain Library:** Ethers.js (v6)
* **Infrastructure:** Alchemy (Ethereum RPC Node)

## 📌 Features

* **Smart Contract Integration:** Interacts with the official **Tether (USDT)** contract.
* **Live Data Fetching:** Retrieves real-time `totalSupply` and `name` variables.
* **API Endpoint:** A clean endpoint at `[Name]ApiTest` to trigger the fetch.
* **Graceful Error Handling:** Validates blockchain connectivity and contract state.

---

## 🚀 Quick Start Guide

### 1. Prerequisites
* Node.js (v16.x or higher)
* An Alchemy API Key

### 2. Installation
Clone the repository and install dependencies:

```bash
git clone <repo-url>
cd <project-folder>
npm install express ethers 

3. ConfigurationOpen index.js and update the ALCHEMY_URL with your personal key:JavaScriptconst ALCHEMY_URL = "[https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY](https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY)";
4. Running the ProjectStart the local server:Bashnode index.js
5. Testing the APIOnce the server is running, visit the following URL in your browser or Postman:http://localhost:3000/MyApiTest📊 Objective Checklist & ResultsTaskStatusDetailsNew API Endpoint✅ Complete
Created MyApiTest
Smart Contract Call✅ Complete Fetched USDT totalSupply from Mainnet
Console Output✅ Complete Results printed to terminal on request
Code Quality✅ Complete Clean, simple, and error-handled
Server started on http://localhost:3000
Test endpoint: http://localhost:3000/MyApiTest
--- New API Request Received ---
{
  message: 'Blockchain data fetched successfully',
  contractName: 'Tether USD',
  totalTokenSupply: '96130880420.059503 USDT',
  network: 'Ethereum Mainnet via Alchemy'
}
📝 NotesContract Used: 0xdAC17F958D2ee523a2206206994597C13D831ec7 (USDT)
Decimals: Handled 6-decimal precision specifically for the USDT token using ethers.formatUnits.



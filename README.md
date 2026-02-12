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
npm install

3. ConfigurationOpen index.js and update the ALCHEMY_URL with your personal key:JavaScriptconst ALCHEMY_URL = "[https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY](https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY)";
4. Running the ProjectStart the local server:Bashnode index.js
5. Testing the APIOnce the server is running, visit the following URL in your browser or Postman:http://localhost:3000/MyApiTest📊 Objective Checklist & ResultsTaskStatusDetailsNew API Endpoint✅ CompleteCreated MyApiTestSmart Contract Call✅ CompleteFetched USDT totalSupply from MainnetConsole Output✅ CompleteResults printed to terminal on requestCode Quality✅ CompleteClean, simple, and error-handledSample Terminal OutputPlaintext--- SUCCESS: DATA FETCHED VIA ALCHEMY ---
{
  token: 'Tether USD',
  supply: '112456789012.345678 USDT',
  provider: 'Alchemy RPC'
}
📝 NotesContract Used: 0xdAC17F958D2ee523a2206206994597C13D831ec7 (USDT)Decimals: Handled 6-decimal precision specifically for the USDT token using ethers.formatUnits.


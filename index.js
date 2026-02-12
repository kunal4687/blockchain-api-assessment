const express = require('express');
const { ethers } = require('ethers');

const app = express();
const PORT = 3000;

// 1. Configuration (Replace YOUR_KEY with your actual Alchemy key)
const ALCHEMY_URL = "https://eth-mainnet.g.alchemy.com/v2/RwrXmYqXpXHpRrmebC9tq";
const provider = new ethers.JsonRpcProvider(ALCHEMY_URL);

// 2. Legit USDT Contract Details
const contractAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
const minABI = [
    "function name() view returns (string)",
    "function totalSupply() view returns (uint256)"
];

// 3. TASK: API Endpoint [My]ApiTest
app.get('/MyApiTest', async (req, res) => {
    try {
        const contract = new ethers.Contract(contractAddress, minABI, provider);

        // Fetching real-time data
        const name = await contract.name();
        const totalSupply = await contract.totalSupply();
        
        // USDT uses 6 decimals (not 18 like ETH)
        const formattedSupply = ethers.formatUnits(totalSupply, 6);

        const output = {
            message: "Blockchain data fetched successfully",
            contractName: name,
            totalTokenSupply: `${formattedSupply} USDT`,
            network: "Ethereum Mainnet via Alchemy"
        };

        // TASK: Print result to console
        console.log("--- New API Request Received ---");
        console.log(output);

        res.json(output);
    } catch (error) {
        console.error("Fetch Error:", error.message);
        res.status(500).json({ error: "Failed to connect to Alchemy. Check your API key." });
    }
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
    console.log(`Test endpoint: http://localhost:${PORT}/MyApiTest`);
});
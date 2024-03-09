// Import necessary libraries or modules
const express = require('express');
const axios = require('axios');

// Create an Express application
const app = express();

// Define a route to fetch the latest Bitcoin price
app.get('/bitcoin', async (req, res) => {
    try {
        // Fetch the latest Bitcoin price from an API (replace this with your actual data source)
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
        const bitcoinData = response.data;

        // Send the latest Bitcoin price data as JSON response
        res.json(bitcoinData);
    } catch (error) {
        console.error('Error fetching the latest Bitcoin price:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Define a route to fetch Bitcoin price history data
app.get('/bitcoin/history', async (req, res) => {
    try {
        // Fetch Bitcoin price history data from an API (replace this with your actual data source)
        const response = await axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2023-01-01&end=2023-12-31');
        const bitcoinHistoryData = response.data;

        // Send Bitcoin price history data as JSON response
        res.json(bitcoinHistoryData);
    } catch (error) {
        console.error('Error fetching Bitcoin price history data:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Define a route to serve trend charts (replace this with your actual implementation)
app.get('/bitcoin/charts', (req, res) => {
    // Serve trend charts
    res.sendFile('bitcoin_charts.html', { root: __dirname });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`CryptoPrice server is running on port ${PORT}`);
});

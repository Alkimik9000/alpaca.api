const express = require('express');
const Alpaca = require('@alpacahq/alpaca-trade-api');
const fs = require('fs');
const app = express();
require('dotenv').config();

const port = 3000;

// Access environment variables
const apiKey = process.env.API_KEY;
const secretKey = process.env.SECRET_KEY;

// Replace YOUR_API_KEY and YOUR_API_SECRET with your actual Alpaca API key and secret.
const alpaca = new Alpaca({
  keyId: apiKey,
  secretKey: secretKey,
  paper: true,
  usePolygon: false
});



// Initialize an empty array to store tick data.
let tickData = [];

// Connect to the Alpaca data stream.


const client = alpaca.websocket;
client.onConnect(() => {
  client.subscribe([‘AM.SPY’]);
  setTimeout(() => client.disconnect(), 6000*1000);
});


websocket.onStateChange((status) => {
  console.log('Status:', status);
});

websocket.onError((err) => {
  console.log('Error:', err);
});


websocket.connect();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

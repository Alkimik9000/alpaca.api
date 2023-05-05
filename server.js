const Alpaca = require('@alpacahq/alpaca-trade-api');
const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Access environment variables
const apiKey = process.env.API_KEY;
const secretKey = process.env.SECRET_KEY;

const alpaca = new Alpaca({
  keyId: 'YOUR_API_KEY',
  secretKey: 'YOUR_SECRET_KEY',
  paper: true,
  usePolygon: false,
});

const websocket = alpaca.data_stream_v2;

websocket.onConnect(() => {
  websocket.subscribeForCryptoTrades(['BTCUSD']);
});

websocket.onStateChange((status) => {
  console.log('Status:', status);
});

websocket.onError((err) => {
  console.log('Error:', err);
});

websocket.onCryptoTrades((trades) => {
  console.log('Trades:', trades);
  // Save the trades data to a JSON file here
  fs.writeFileSync('trades.json', JSON.stringify(trades, null, 2));
});

websocket.connect();

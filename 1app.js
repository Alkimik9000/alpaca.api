const axios = require('axios');

// Replace 'YOUR_ALPACA_API_KEY' and 'YOUR_ALPACA_SECRET_KEY' with your Alpaca API credentials
const apiKey = 'PKYQRHO6N8U326IYG43C';
const secretKey = 'udnfp2SFgr3SWTBDnI8nX70bW4iv2w1C00vYAWCi';

// keyId: 'PKYQRHO6N8U326IYG43C',
// secretKey: 'udnfp2SFgr3SWTBDnI8nX70bW4iv2w1C00vYAWCi',

// Fetch real-time quotes for BTC/USD
axios.get('https://data.alpaca.markets/v1/last/stocks/btcusd', {
  headers: {
    'APCA-API-KEY-ID': apiKey,
    'APCA-API-SECRET-KEY': secretKey
  }
})
  .then(response => {
    const quote = response.data;
    console.log(`Symbol: ${quote.symbol}`);
    console.log(`Price: ${quote.last.price}`);
    console.log(`Timestamp: ${quote.last.timestamp}`);
  })
  .catch(error => {
    console.error('Error fetching quote:', error.response.data);
  });

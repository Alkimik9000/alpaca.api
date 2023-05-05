const WebSocket = require('ws');

const ws = new WebSocket('wss://stream.binance.com:9443');

ws.on('open', () => {
  console.log('WebSocket connection established');

  // Subscribe to the BTC/USDT ticker stream
  ws.send(JSON.stringify({
    method: 'SUBSCRIBE',
    params: ['btcusdt@ticker'],
    id: 1
  }));
});

ws.on('message', (data) => {
  const message = JSON.parse(data);
  
  if (message.stream === 'btcusdt@ticker') {
    const ticker = message.data;
    console.log(`Symbol: ${ticker.s}`);
    console.log(`Price: ${ticker.c}`);
    console.log(`Timestamp: ${ticker.E}`);
  }
});

ws.on('close', () => {
  console.log('WebSocket connection closed');
});

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

const proxyTarget = 'https://techfiesta-backend.onrender.com';

app.use('/', createProxyMiddleware({
  target: proxyTarget,
  changeOrigin: true,
}));

// Start the proxy server
app.listen(4000, () => {
  console.log('Proxy server is running on port 4000');
});

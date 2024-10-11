const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

const proxyTarget = 'https://techfiesta-backend.onrender.com';
const restrictedUrls = ['/api/v1/users/pangs'];
app.use((req, res, next) => {
  if (restrictedUrls.includes(req.path)) {
    return res.status(403).send('Access to this resource is forbidden.');
  }
  next();
});
import { cors } from "cors";
app.use(app.use(cors({
  origin:['http://localhost:5173'],
  credentials:true
})))
app.use('/', createProxyMiddleware({
  target: proxyTarget,
  changeOrigin: true,
}));
// Start the proxy server
app.listen(4000, () => {
  console.log('Proxy server is running on port 4000');
});

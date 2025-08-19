// app.js
require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    message: 'API desplegada con Node.js en Render!',
    environment: process.env.NODE_ENV || 'development'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;

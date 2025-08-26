require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const homeRoutes = require('./routes/home');

const app = express();

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
// Middlewares
app.use(express.json());

// Conexión a Mongo
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/extradb")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error", err));

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/home', homeRoutes);
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find({}); // Obtener todos los usuarios
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.get('/', (req, res) => {

  try {
    const isConnected = mongoose.connection.readyState === 1;
    res.json({
      status: 'OK',
      database: isConnected ? 'Connected' : 'Disconnected',
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = app;

require('dotenv').config();
const express = require('express');
const connectDB = require('./db');
const cors = require('cors'); // Importa el paquete cors

const app = express();

// Connect Database
connectDB();

// Init Middleware

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.use(express.json());

// Define Routes
app.use('/api/movies', require('./routes/movies'));

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./db');
const favoritesRoutes = require('./routes/favoritesRoutes');

const app = express();
const port = 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/favorites', favoritesRoutes);

app.get('/', (req, res) => {
  res.send('¡Hola desde Express!');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
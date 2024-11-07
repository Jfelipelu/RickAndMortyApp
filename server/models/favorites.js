const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
    favoriteId: { type: String, required: true },
    type: { type: String, required: true },
    creationTime: { type: Date, default: Date.now },
  });

const Favorite = mongoose.model('Favorite', favoriteSchema, 'RickAndMorty');

module.exports = Favorite;
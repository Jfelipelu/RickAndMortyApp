const express = require('express');
const Favorite = require('../models/favorites');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const favorites = await Favorite.find();
    res.json(favorites);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching favorites', error: err });
  }
});

router.post('/', async (req, res) => {
  const { favoriteId, type } = req.body;

  try {
    const newFavorite = new Favorite({
      favoriteId,
      type,
    });

    await newFavorite.save();
    res.status(201).json({ message: 'Favorite Added', favorite: newFavorite });
  } catch (err) {
    res.status(400).json({ message: 'Error adding favorite', error: err });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedFavorite = await Favorite.findByIdAndDelete(id);
    if (!deletedFavorite) {
      return res.status(404).json({ message: 'Favorite not found' });
    }
    res.json({ message: 'Favorite deleted', favorite: deletedFavorite });
  } catch (err) {
    res.status(400).json({ message: 'Error deleting favorite', error: err });
  }
});

module.exports = router;
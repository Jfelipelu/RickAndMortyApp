import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    addFavoriteCharacter: (state, action) => {
      const exists = state.favorites.find(
        (character) => character.id === action.payload.id
      );
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    removeFavoriteCharacter: (state, action) => {
      state.favorites = state.favorites.filter(
        (character) => character.id !== action.payload
      );
    },
  },
});

export const {
  addFavoriteCharacter,
  removeFavoriteCharacter,
} = charactersSlice.actions;

export default charactersSlice.reducer;
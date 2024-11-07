import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    addFavoriteLocation: (state, action) => {
      const exists = state.favorites.find((location) => location.id === action.payload.id);
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    removeFavoriteLocation: (state, action) => {
      state.favorites = state.favorites.filter((location) => location.id !== action.payload);
    },
  },
});

export const { addFavoriteLocation, removeFavoriteLocation } = locationsSlice.actions;
export default locationsSlice.reducer;
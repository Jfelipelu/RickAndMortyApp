import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {
    addFavoriteEpisode: (state, action) => {
      const exists = state.favorites.find((episode) => episode.id === action.payload.id);
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    removeFavoriteEpisode: (state, action) => {
      state.favorites = state.favorites.filter((episode) => episode.id !== action.payload);
    },
  },
});

export const { addFavoriteEpisode, removeFavoriteEpisode } = episodesSlice.actions;
export default episodesSlice.reducer;
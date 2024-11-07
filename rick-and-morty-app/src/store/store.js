import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './reducers//charactersSlice';
import episodesReducer from './reducers//episodesSlice';
import locationsReducer from './reducers/locationsSlice';

const store = configureStore({
  reducer: {
    characters: charactersReducer,
    episodes: episodesReducer,
    locations: locationsReducer,
  },
});


export default store;
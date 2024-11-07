import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Episodes from './pages/episodes';
import Locations from './pages/locations';
import Characters from './pages/characters';
import Favorites from './pages/favorites';
import Navbar from './components/navigationBar';
import CharacterDetail from './components/characters/characterDetail';
import EpisodeDetail from './components/episodes/episodeDetail'
import LocationDetail from './components/locations/locationDetail';

import { getFavoritesFromServer } from './services/localServer';
import { getCharacterById, getLocationById, getEpisodeById } from './services/rickAndMortyApi';
import { addFavoriteCharacter } from './store/reducers/charactersSlice';
import { addFavoriteEpisode } from './store/reducers/episodesSlice';
import { addFavoriteLocation } from './store/reducers/locationsSlice';

function App() {
  const [favoritesDb, setFavoritesDb] = useState([]);
  const [characterDetails, setCharacterDetails] = useState([]);
  const [episodeDetails, setEpisodeDetails] = useState([]);
  const [locationDetails, setLocationDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFavoritesFromServer();
      setFavoritesDb(data);
    };
    
    fetchData();
  }, []);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      const charactersDb = favoritesDb.filter((fav) => fav.type === 'Character');
      const characterIds = charactersDb.map((fav) => fav.favoriteId);

      try {
        const characterPromises = characterIds.map((id) => getCharacterById(id));
        const characterData = await Promise.all(characterPromises);
        const charactersWithId = characterData.map((char, index) => ({
          ...char,
          idDb: charactersDb[index]._id,
        }));
        setCharacterDetails(charactersWithId);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    
    const fetchEpisodeDetails = async () => {
      const episodesDb = favoritesDb.filter((fav) => fav.type === 'Episode');
      const episodeIds = episodesDb.map((fav) => fav.favoriteId);
      
      try {
        const episodePromises = episodeIds.map((id) => getEpisodeById(id));
        const episodeData = await Promise.all(episodePromises);
        const episodesWithId = episodeData.map((epi, index) => ({
          ...epi,
          idDb: episodesDb[index]._id,
        }));
        setEpisodeDetails(episodesWithId);
      } catch (error) {
        console.error('Error fetching episodes:', error);
      }
    };
    
    
    const fetchLocationDetails = async () => {
      const locationsDb = favoritesDb.filter((fav) => fav.type === 'Location');
      const locationIds = locationsDb.map((fav) => fav.favoriteId);
      
      try {
        const locationPromises = locationIds.map((id) => getLocationById(id));
        const locationData = await Promise.all(locationPromises);
        const locationWithId = locationData.map((loc, index) => ({
          ...loc,
          idDb: locationsDb[index]._id,
        }));
        setLocationDetails(locationWithId);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    

    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchCharacterDetails(), fetchEpisodeDetails(), fetchLocationDetails()]);
      setLoading(false);
    };

    fetchData();


  }, [favoritesDb]);

  useEffect(() => {
    episodeDetails.map((epi) => dispatch(addFavoriteEpisode(epi)));
    characterDetails.map((char) => dispatch(addFavoriteCharacter(char)));
    locationDetails.map((loc) => dispatch(addFavoriteLocation(loc)));
  }, [characterDetails, episodeDetails, locationDetails, dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episode/:id" element={<EpisodeDetail />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/:id" element={<LocationDetail />} />
        <Route path="/characters" element={<Characters />}  />
        <Route path="/character/:id" element={<CharacterDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
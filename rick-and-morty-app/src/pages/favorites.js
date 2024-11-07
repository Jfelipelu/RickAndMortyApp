import React from 'react';
import { useSelector } from 'react-redux';
import CharacterCard from '../components/characters/characterCard';
import EpisodeCard from '../components/episodes/episodeCard';
import LocationCard from '../components/locations/locationCard';
import { saveFavoriteToServer } from '../services/localServer';

const FavoritesPage = () => {
  const { favorites: characterFavorites } = useSelector((state) => state.characters);
  const { favorites: episodeFavorites } = useSelector((state) => state.episodes);
  const { favorites: locationFavorites } = useSelector((state) => state.locations);

  const handleSaveToDataBase = async () => {
    const formattedCharacters = characterFavorites
      .filter((char) => !char.idDb)
      .map((char) => { return {favoriteId: char.id, type: 'Character'}});

    const formattedEpisodes = episodeFavorites
      .filter((epi) => !epi.idDb)
      .map((epi) => { return {favoriteId: epi.id, type: 'Episode'}});

    const formattedLocations = locationFavorites
      .filter((loc) => !loc.idDb)
      .map((loc) => { return {favoriteId: loc.id, type: 'Location'}});

    const allFavorites = [
      ...formattedCharacters,
      ...formattedEpisodes,
      ...formattedLocations
    ];

    try {
      await Promise.all(allFavorites.map((fav) => saveFavoriteToServer(fav)));
      console.log('Every favorite got stored in data base');
    } catch (error) {
      console.error('Error storing favorites in data base', error);
    }
  };

  return (
    <div className="favorites-page">
      <div className="header">
        <h1>Your Favorites</h1>
        <button className="save-button" onClick={handleSaveToDataBase}>
          Save Favorites
        </button>
      </div>

      <div className="favorites-section">
        <h2>Characters</h2>
        {characterFavorites.length > 0 ? (
          <div className="cards-container">
            {characterFavorites.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        ) : (
          <p className="no-favorites-message">You've got no favorite characters.</p>
        )}
      </div>

      <div className="favorites-section">
        <h2>Episodes</h2>
        {episodeFavorites.length > 0 ? (
          <div className="cards-container">
            {episodeFavorites.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        ) : (
          <p className="no-favorites-message">You've got no favorite episodes.</p>
        )}
      </div>

      <div className="favorites-section">
        <h2>Locations</h2>
        {locationFavorites.length > 0 ? (
          <div className="cards-container">
            {locationFavorites.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        ) : (
          <p className="no-favorites-message">You've got no favorite locations.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CharacterList from '../components/characters/characterList';
import CharacterDetail from '../components/characters/characterDetail';

import { getCharacters } from '../services/rickAndMortyApi';

const Characters = ({ favoritesDb }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getCharacters();
      setCharacters(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<CharacterList characters={characters} charactersDb={favoritesDb} />} />
        <Route path="/:id" element={<CharacterDetail />} />
      </Routes>
    </div>
  );
};

export default Characters;
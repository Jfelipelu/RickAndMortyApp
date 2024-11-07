import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import EpisodeList from '../components/episodes/episodeList';
import EpisodeDetail from '../components/episodes/episodeDetail';

import { getEpisodes } from '../services/rickAndMortyApi';

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getEpisodes();
      setEpisodes(data);
      setLoading(false);
    };
    
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<EpisodeList episodes={episodes} />}/>
        <Route path="/:id" element={<EpisodeDetail />} />
      </Routes>
    </div>
  );
};

export default Episodes;
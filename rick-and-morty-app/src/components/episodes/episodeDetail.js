import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SingleCardContainer, SingleEpisodeName, SingleEpisodeDetails, SingleInfoContainer } from './epiCardStyles';

import { getEpisodeById } from '../../services/rickAndMortyApi';


const CharacterDetail = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchEpisode = async () => {
      setLoading(true);
      const data = await getEpisodeById(id);
      setEpisode(data);

      const characterPromises = data.characters.map(async (characterUrl) => {
        const response = await fetch(characterUrl);
        const characterData = await response.json();
        return characterData.name;
      });

      const characterNames = await Promise.all(characterPromises);
      setCharacters(characterNames);

      setLoading(false);
    };

    fetchEpisode();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!episode) {
    return <div>Character not found</div>;
  }

  return (
    <SingleCardContainer>
      <SingleEpisodeName>{episode.name}</SingleEpisodeName>
      <SingleInfoContainer>
        <SingleEpisodeDetails><strong>Episode:</strong> {episode.episode}</SingleEpisodeDetails>
        <SingleEpisodeDetails><strong>Air Date:</strong> {episode.air_date}</SingleEpisodeDetails>
        <SingleEpisodeDetails><strong>Characters:</strong> {characters.join(', ')}</SingleEpisodeDetails>
        <SingleEpisodeDetails><strong>Created:</strong> {new Date(episode.created).toLocaleDateString()}</SingleEpisodeDetails>
      </SingleInfoContainer>
    </SingleCardContainer>

  );
};

export default CharacterDetail;
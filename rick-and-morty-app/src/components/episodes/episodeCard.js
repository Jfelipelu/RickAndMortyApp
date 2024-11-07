import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

import { addFavoriteEpisode, removeFavoriteEpisode } from '../../store/reducers/episodesSlice';
import { deleteFavoriteFromServer } from '../../services/localServer';

import { CardContainer, EpisodeName, EpisodeDetails, InfoContainer, FavoriteButton } from './epiCardStyles';

const EpisodeCard = ({ episode }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.episodes?.favorites || []);

  const isFavorite = favorites.some((fav) => fav.id === episode.id);

  const toggleFavorite = async (event) => {
    event.stopPropagation();

    if (isFavorite) {
      dispatch(removeFavoriteEpisode(episode.id));
      if (episode.idDb) {
        try {
          await deleteFavoriteFromServer(episode.idDb);
        } catch (error) {
          console.error('Could not remove from Data Base', error);
        }
      }
    } else {
      dispatch(addFavoriteEpisode(episode));
    }
  };

  const handleViewDetails = () => {
    navigate(`/episode/${episode.id}`);
  };

  return (
    <CardContainer onClick={handleViewDetails}>
      <InfoContainer>
        <EpisodeName>{episode.name}</EpisodeName>
        <EpisodeDetails><strong>Episode:</strong> {episode.episode}</EpisodeDetails>
        <EpisodeDetails><strong>Air Date:</strong> {episode.air_date}</EpisodeDetails>
        <EpisodeDetails><strong>Created:</strong> {new Date(episode.created).toLocaleDateString()}</EpisodeDetails>
      </InfoContainer>
      <FavoriteButton onClick={toggleFavorite}>
          {isFavorite ? <Favorite /> : <FavoriteBorder />}
        </FavoriteButton>
    </CardContainer>
  );
};

export default EpisodeCard;
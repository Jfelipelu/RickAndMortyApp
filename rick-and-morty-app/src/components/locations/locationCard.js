import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import { addFavoriteLocation, removeFavoriteLocation } from '../../store/reducers/locationsSlice';
import { deleteFavoriteFromServer } from '../../services/localServer';

import { CardContainer, EpisodeName, EpisodeDetails, InfoContainer, FavoriteButton } from './locCardStyles';

const LocationCard = ({ location }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.locations?.favorites || []);

  const isFavorite = favorites.some((fav) => fav.id === location.id);

  const toggleFavorite = async (event) => {
    event.stopPropagation();

    if (isFavorite) {
      dispatch(removeFavoriteLocation(location.id));
      if (location.idDb) {
        try {
          await deleteFavoriteFromServer(location.idDb);
        } catch (error) {
          console.error('Could not remove from Data Base', error);
        }
      }
    } else {
      dispatch(addFavoriteLocation(location));
    }
  };

  const handleViewDetails = () => {
    navigate(`/locations/${location.id}`);
  };

  return (
    <CardContainer onClick={handleViewDetails}>
      <InfoContainer>
        <EpisodeName>{location.name}</EpisodeName>
        <EpisodeDetails><strong>Type:</strong> {location.type}</EpisodeDetails>
        <EpisodeDetails><strong>Dimension:</strong> {location.dimension}</EpisodeDetails>
        <EpisodeDetails><strong>Created:</strong> {new Date(location.created).toLocaleDateString()}</EpisodeDetails>
      </InfoContainer>
      <FavoriteButton onClick={toggleFavorite}>
        {isFavorite ? <Favorite /> : <FavoriteBorder />}
      </FavoriteButton>
    </CardContainer>
  );
};

export default LocationCard;
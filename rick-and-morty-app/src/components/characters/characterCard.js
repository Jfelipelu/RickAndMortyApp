import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

import { CardContainer, CharacterImage, CharacterName, CharacterDetails, FavoriteButton, InfoContainer } from './charCardStyles';

import { addFavoriteCharacter, removeFavoriteCharacter } from '../../store/reducers/charactersSlice';
import { deleteFavoriteFromServer } from '../../services/localServer';

const CharacterCard = ({ character }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.characters?.favorites || []);

  const isFavorite = favorites.some((fav) => fav.id === character.id);

  const toggleFavorite = async (event) => {
    event.stopPropagation();

    if (isFavorite) {
      dispatch(removeFavoriteCharacter(character.id));
      if (character.idDb) {
        try {
          await deleteFavoriteFromServer(character.idDb);
        } catch (error) {
          console.error('Could not remove from Data Base', error);
        }
      }
    } else {
      dispatch(addFavoriteCharacter(character));
    }
  };

  const handleViewDetails = () => {
    navigate(`/character/${character.id}`);
  };

  return (
    <CardContainer onClick={handleViewDetails} role="button">
      <CharacterImage src={character.image} alt={character.name} />
      <InfoContainer>
        <div>
          <CharacterName>{character.name}</CharacterName>
          <CharacterDetails><strong>Species:</strong> {character.species}</CharacterDetails>
          <CharacterDetails><strong>Gender:</strong> {character.gender}</CharacterDetails>
          <CharacterDetails><strong>Location:</strong> {character.location.name}</CharacterDetails>
        </div>
        <FavoriteButton onClick={toggleFavorite}>
          {isFavorite ? <Favorite /> : <FavoriteBorder />}
        </FavoriteButton>
      </InfoContainer>
    </CardContainer>
  );
};

export default CharacterCard;
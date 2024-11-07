import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../../services/rickAndMortyApi';
import { SingleCardContainer, SingleCharacterImage, SingleCharacterName, SingleCharacterDetails, SingleInfoContainer} from './charCardStyles';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading(true);
      const data = await getCharacterById(id);
      setCharacter(data);
      setLoading(false);
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <div>
      <SingleCardContainer>
        <SingleCharacterImage src={character.image} alt={character.name} />
        <SingleInfoContainer>
          <SingleCharacterName>{character.name}</SingleCharacterName>
          <SingleCharacterDetails><strong>Status:</strong> {character.status}</SingleCharacterDetails>
          <SingleCharacterDetails><strong>Species:</strong> {character.species}</SingleCharacterDetails>
          <SingleCharacterDetails><strong>Gender:</strong> {character.gender}</SingleCharacterDetails>
          <SingleCharacterDetails><strong>Origin:</strong> {character.origin.name}</SingleCharacterDetails>
          <SingleCharacterDetails><strong>Location:</strong> {character.location.name}</SingleCharacterDetails>
        </SingleInfoContainer>
      </SingleCardContainer>
    </div>
  );
};

export default CharacterDetail;
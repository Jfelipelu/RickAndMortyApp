import React from 'react';
import { styled } from '@mui/material/styles';
import CharacterCard from './characterCard';

const Container = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
}));

const CharacterGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: theme.spacing(3),
  marginTop: theme.spacing(2),
}));

const CharacterList = ({ characters }) => {
  return (
    <Container>
      <h2>Characters</h2>
      <CharacterGrid>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </CharacterGrid>
    </Container>
  );
};

export default CharacterList;
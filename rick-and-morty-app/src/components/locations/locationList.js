import React from 'react';
import LocationCard from './locationCard';
import { styled } from '@mui/material/styles';


const Container = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
}));

const LocationsGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: theme.spacing(3),
  marginTop: theme.spacing(2),
}));

const LocationList = ({ locations }) => {
  return (
    <Container>
      <h2>Locations</h2>
      <LocationsGrid>
        {locations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </LocationsGrid>
    </Container>
  );
};

export default LocationList;
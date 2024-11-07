import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getLocationById } from '../../services/rickAndMortyApi';
import { SingleCardContainer, SingleLocationName, SingleLocationDetails, SingleInfoContainer } from './locCardStyles';

const LocationDetail = () => {
  const { id } = useParams();
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchLocation = async () => {
      setLoading(true);
      const data = await getLocationById(id);
      setLocation(data);

      const characterPromises = data.residents.map(async (characterUrl) => {
        const response = await fetch(characterUrl);
        const characterData = await response.json();
        return characterData.name;
      });

      const characterNames = await Promise.all(characterPromises);
      setCharacters(characterNames);

      setLoading(false);
    };

    fetchLocation();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!location) {
    return <div>Location not found</div>;
  }

  return (
    <SingleCardContainer>
      <SingleLocationName>{location.name}</SingleLocationName>
      <SingleInfoContainer>
        <SingleLocationDetails><strong>Type: </strong>{location.type}</SingleLocationDetails>
        <SingleLocationDetails><strong>Dimension: </strong>{location.dimension}</SingleLocationDetails>
        <SingleLocationDetails><strong>Residents: </strong>{characters.join(', ')}</SingleLocationDetails>
      </SingleInfoContainer>
    </SingleCardContainer>
  );
};

export default LocationDetail;
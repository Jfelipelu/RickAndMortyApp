import React from 'react';
import { styled } from '@mui/material/styles';

import EpisodeCard from './episodeCard';

const Container = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
}));

const EpisodesGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: theme.spacing(3),
  marginTop: theme.spacing(2),
}));

const EpisodeList = ({ episodes }) => {
  return (
    <Container>
      <h2>Episodes</h2>
      <EpisodesGrid>
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </EpisodesGrid>
    </Container>
  );
};

export default EpisodeList;
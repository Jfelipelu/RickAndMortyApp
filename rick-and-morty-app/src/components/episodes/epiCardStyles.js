import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';

export const CardContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: theme.spacing(2),
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
  },
  position: 'relative',
}));


export const EpisodeName = styled('h3')(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 'bold',
  margin: 0,
  width: '80%',
}));

export const EpisodeDetails = styled('p')(({ theme }) => ({
  fontSize: '1rem',
  margin: '4px 0',
}));

export const InfoContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: theme.spacing(1),
}));

export const FavoriteButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  padding: theme.spacing(0.5),
  color: '#ff1744',
}));

export const SingleCardContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: theme.spacing(3),
    height: '100vh',
    overflowY: 'auto',
  }));
  
  export const SingleEpisodeName = styled('h2')(({ theme }) => ({
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    color: '#333',
  }));
  
  export const SingleEpisodeDetails = styled('p')(({ theme }) => ({
    fontSize: '1.2rem',
    marginBottom: theme.spacing(2),
    color: '#333',
  }));
  
  export const SingleInfoContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '80%',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  }));
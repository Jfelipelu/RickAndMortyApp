import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2C3E50' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Rick & Morty App
        </Typography>
        <div>
          <Button
            color="inherit"
            component={Link}
            to="/episodes"
            sx={{
              marginLeft: 2,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#34495E',
              },
            }}
          >
            Episodes
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/locations"
            sx={{
              marginLeft: 2,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#34495E',
              },
            }}
          >
            Locations
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/characters"
            sx={{
              marginLeft: 2,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#34495E',
              },
            }}
          >
            Characters
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/favorites"
            sx={{
              marginLeft: 2,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#34495E',
              },
            }}
          >
            Favorites
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
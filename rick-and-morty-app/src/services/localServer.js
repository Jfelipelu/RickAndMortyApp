export const saveFavoriteToServer = async (favoriteData) => {
  try {
      const response = await fetch('http://localhost:5000/api/favorites', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(favoriteData),
      });
      const data = await response.json();
      return data;
  } catch (err) {
      console.error('Error saving favorite:', err);
  }
};

export const getFavoritesFromServer = async () => {
  try {
      const response = await fetch('http://localhost:5000/api/favorites');
      const data = await response.json();
      return data;
  } catch (err) {
      console.error('Error fetching favorites:', err);
  }
};

export const deleteFavoriteFromServer = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/api/favorites/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Error deleting favorite');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Error deleting favorite:', err);
  }
};

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async (page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/character?page=${page}`);
    if (!response.ok) {
      throw new Error('Failed to fetch characters');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getCharacterById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/character/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch character details');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getEpisodes = async (page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/episode?page=${page}`);
    if (!response.ok) {
      throw new Error('Failed to fetch episodes');
    }
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error('Error fetching episodes:', error);
    return [];
  }
};

export const getEpisodeById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/episode/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch episode details');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getLocations = async (page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/location?page=${page}`);
    if (!response.ok) {
      throw new Error('Failed to fetch locations');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getLocationById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/location/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch location details');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
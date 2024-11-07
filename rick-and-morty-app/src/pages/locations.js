import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LocationList from '../components/locations/locationList';
import LocationDetail from '../components/locations/locationDetail';
import { getLocations } from '../services/rickAndMortyApi';

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getLocations();
      setLocations(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading Locations...</p>;
  }


  return (
    <div>
      <Routes>
        <Route path="/" element={<LocationList locations={locations} />}/>
        <Route path="/:id" element={<LocationDetail />} />
      </Routes>
    </div>
  );
};

export default Locations;

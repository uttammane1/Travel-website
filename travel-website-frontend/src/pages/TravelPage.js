import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TravelCard from '../components/TravelCard';
import TravelForm from '../components/TravelForm';

const TravelPage = () => {
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/travels')
      .then(response => setTravels(response.data))
      .catch(error => console.error('Error fetching travels:', error));
  }, []);

  return (
    <div>
      <h1>Travel Packages</h1>
      <TravelForm />
      <div>
        {travels.map(travel => (
          <TravelCard key={travel._id} travel={travel} />
        ))}
      </div>
    </div>
  );
};

export default TravelPage;

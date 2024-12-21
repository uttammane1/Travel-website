import React, { useState } from 'react';
import axios from 'axios';

const TravelForm = () => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTravel = { destination, date, price };
    
    axios.post('http://localhost:5000/api/travels', newTravel)
      .then(response => {
        console.log('Travel created:', response.data);
      })
      .catch(error => {
        console.error('Error creating travel:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">Add Travel Package</button>
    </form>
  );
};

export default TravelForm;

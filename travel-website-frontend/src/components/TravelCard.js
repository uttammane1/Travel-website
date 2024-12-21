import React from 'react';

const TravelCard = ({ travel }) => {
  return (
    <div>
      <h3>{travel.destination}</h3>
      <p>Date: {new Date(travel.date).toLocaleDateString()}</p>
      <p>Price: ${travel.price}</p>
    </div>
  );
};

export default TravelCard;

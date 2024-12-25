import React from 'react';
import '../styles/ApartmentCard.css';

const ApartmentCard = () => {
  return (
    <div className="apartment-card">
      <img src="https://via.placeholder.com/300x200" alt="Apartment" />
      <div className="card-content">
        <h4>Apartment Title</h4>
        <p>Price: 120,000 HUF</p>
        <p>District: 5</p>
        <p>Features: AC, Balcony, Furnished</p>
      </div>
    </div>
  );
};

export default ApartmentCard;

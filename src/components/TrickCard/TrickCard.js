import React from 'react';
import './TrickCard.css';

const TrickCard = ({ id, name, stance, obstacle, tutorial }) => {
  return (
    <div className='card'>
      <h2>{name}</h2>
      <h2>Obstacle: {obstacle}</h2>
      <h2>Link to tutorial: {tutorial}</h2>
    </div>
  )
}

export default TrickCard;
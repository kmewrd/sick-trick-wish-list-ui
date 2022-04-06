import React from 'react';
import './TrickCard.css';

const TrickCard = ({ id, name, stance, obstacle, tutorial }) => {
  return (
    <div className='card'>
      <h3>{stance && stance} {name}</h3>
      <h3>Obstacle: {obstacle}</h3>
      <h3>Link to Tutorial:</h3>
      <h3><a href={tutorial}>{tutorial}</a></h3>
    </div>
  )
}

export default TrickCard;
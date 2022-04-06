import React from 'react';
import './TrickCard.css';

const TrickCard = ({ id, name, stance, obstacle, tutorial, deleteTrick }) => {
  return (
    <div className='card'>
      <h3>{stance && stance} {name}</h3>
      <h3>Obstacle: {obstacle}</h3>
      <h3>Link to Tutorial:</h3>
      <h3><a href={tutorial}>{tutorial}</a></h3>
      <button className='delete-button' onClick={() => deleteTrick(id)}>X</button>
    </div>
  )
}

export default TrickCard;
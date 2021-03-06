import React from 'react';
import TrickCard from '../TrickCard/TrickCard';
import cleanData from '../../utils';
import './Tricks.css'

const Tricks = ({ tricks, deleteTrick }) => {
  tricks = cleanData(tricks);
  const allTricks = tricks.map(trick => <TrickCard key={trick.id} id ={trick.id} name={trick.name} stance={trick.stance} obstacle={trick.obstacle} tutorial={trick.tutorial} deleteTrick={deleteTrick} />);

  return (
    <div className='tricks-container'>
      {allTricks}
    </div>
  )
}

export default Tricks;
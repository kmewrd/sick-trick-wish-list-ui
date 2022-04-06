import React from 'react';
import TrickCard from '../TrickCard/TrickCard';

const Tricks = ({ tricks }) => {
  const allTricks = tricks.map(trick => <TrickCard key={trick.id} id ={trick.id} name={trick.name} stance={trick.stance} obstacle={trick.obstacle} tutorial={trick.tutorial} />);

  return (
    <div>
      {allTricks}
    </div>
  )
}

export default Tricks;
import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterGrid = ( { characterList } ) => {

  return (
    <section className='container'>
      <div className='cards-grid'>
        { characterList.map((character) => <CharacterCard key={ character.id } {...character} /> )  }
      </div>
    </section>
  )
}

export default CharacterGrid;
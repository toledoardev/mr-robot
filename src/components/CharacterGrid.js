import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterGrid = ( { characterList, search } ) => {

  const searchOnList = (characterList) => {
    if (search) {
     let searched = search.toLowerCase();
     return characterList.filter((person) => person.roles[0].character.toLowerCase().includes(searched));
    }
    else {
      return characterList;
    }
  }

  return (
    <section className='container'>
      <div className='cards-grid'>
        { searchOnList(characterList).map((character) => <CharacterCard key={ character.id } {...character} /> )  }
      </div>
    </section>
  )
}

export default CharacterGrid;
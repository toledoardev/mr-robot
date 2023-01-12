import React from 'react';
import { useState } from 'react';
import CharacterCard from './CharacterCard';

//Pagination constants
const BEGGINING = 0;
const FIRST_PAGE = 1;
const LIMIT = 24;


const CharacterGrid = ( { characterList, search } ) => {
  const [page, setPage] = useState(FIRST_PAGE);


  const searchOnList = (characterList) => {
    if (search) {
     return characterList.filter((person) => person.roles[0].character.toLowerCase().includes(search.toLowerCase()));
    }
    else {
      return characterList.slice(BEGGINING,page*LIMIT);
    }
  }

  const setPageNumber = () => {
    setPage(page+1)
  } 


  return (
    <section className='container'>
      <div className='cards-grid'>
        { searchOnList(characterList).map((character) => <CharacterCard key={ character.id } {...character} /> )  }
      </div>
      <div className='centered'>
        <button className='button-see-more' onClick={setPageNumber} >
          SEE MORE
        </button>
      </div>
    </section>
  )
}

export default CharacterGrid;
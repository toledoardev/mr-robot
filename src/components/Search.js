import React from 'react';
import { useState } from 'react';


const Search = ( props ) => {
  const [query, setQuery] = useState('');

  const handleQuerySearch = (event) => {
    let toSearch = event.target.value;

    setQuery(toSearch);
    props.onSearchCharacters(toSearch);

  }

  return (
    <section className='search'>
      <form onSubmit={ (event) => event.preventDefault() }>  
        <input
          type= 'search'
          className='form-control'
          placeholder='Search character'
          value= { query }
          onChange= { handleQuerySearch }
        />  
      </form>
    </section>
  )
}

export default Search;
import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import CharacterGrid from './components/CharacterGrid';
import Header from './components/Header';

const API_URL = 'https://api.themoviedb.org/3/tv/62560/aggregate_credits?api_key=dc095d999665af5f34800e8defa60920&language=en-US'


function App() {
  const [characters, setCharacters] = useState([]);
  
  useEffect(()=>{
    const fetchCharacters = ()=> {
            fetch(API_URL)
            .then((response)=>response.json())
            .then(data => {
              setCharacters(data.cast.filter(character => character.profile_path != null))
            })
    }

    fetchCharacters();
  },[])

  return (
    <div className='container'>
      <Header />
      <CharacterGrid characterList = { characters } />
    </div>
  );
}

export default App;

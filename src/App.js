import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Spinner from './components/Spinner';
import CharacterGrid from './components/CharacterGrid';
import Footer from './components/Footer';


const API_KEY = 'dc095d999665af5f34800e8defa60920';
const API_URL = `https://api.themoviedb.org/3/tv/62560/aggregate_credits?api_key=${API_KEY}&language=en-US`;


function App() {
  const [loading, setLoading] = useState(true)
  const [characters, setCharacters] = useState([]);
  const [searchedCharacter, setSearchedCharacter] = useState(null);

  useEffect(()=>{
    const fetchCharacters = ()=> {
            fetch(API_URL)
            .then((response)=>response.json())
            .then(data => {
              setCharacters(data.cast.filter(character => 
                  (character.profile_path != null ) && ( ! character.roles[0].character.includes('uncredited') )
              ));
              setLoading(false);
            })
    }

    fetchCharacters();
  },[])

  const handleSearchCharacters = (searched) => {
    if (searched === ''){
      searched = null
    } 
    setSearchedCharacter(searched);
  }

  return (
    <>
      <div className='container'>
        <Header />
        <Search onSearchCharacters = { handleSearchCharacters } />
        {
          loading ? ( <Spinner />) 
          : (<CharacterGrid characterList = { characters } search = { searchedCharacter } />)
        }
      </div>
      <Footer />
    </>
  );
}

export default App;

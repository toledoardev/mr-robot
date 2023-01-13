import React from 'react';

const API_IMAGE = 'https://image.tmdb.org/t/p/w500/';

const CharacterCard = ( {profile_path, name, roles, popularity} ) => {

  return (
    <div className='card'>
      <img src= { API_IMAGE + profile_path } alt='character'></img>
      <h2 className='centered'>  { roles[0].character } </h2>
      <div className='card-content'>
        <h1 className='centered'>  { roles[0].character } </h1>
        <ul>  
          <li> 
            <strong>Actor Name:</strong> { name } 
          </li>
          <li> 
            <strong>Total episodes:</strong> { roles[0].episode_count } 
          </li>
          <li> 
            <strong>Popularity:</strong> { popularity } 
          </li>
        </ul>
      </div>
    </div>         
  )
}

export default CharacterCard;
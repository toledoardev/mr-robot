import React from 'react';
import spinner from '../assets/images/spinner.gif';

const Spinner = () => {

  return (
    <div className='spinner-container'> 
      <img src={ spinner } alt = 'loading' />
    </div>
  )
}

export default Spinner;
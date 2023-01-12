import React from 'react';
import logo from '../assets/images/mr_robot.png';

const Header = () => {
  
  return (
    <header id='home' className='centered'>
      <img src= { logo }  alt= 'logo' />
    </header>
  )
}

export default Header;
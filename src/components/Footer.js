import React from 'react';
import { GrLinkedin } from 'react-icons/gr';
import { MdCopyright } from 'react-icons/md';
import fsocietyLogo from '../assets/images/fsociety_sticker.png';


const Footer = () => {
  return (
    <footer>
      <div className='column-container centered'>  
        <h4>Alejandro Toledo</h4>
        <p>Full Stack Web Developer</p>
        <div className='icons-container'>
          <div><a href='https://linkedin.com/in/alejandro-toledo-dev'> <GrLinkedin size={28}/></a></div>
        </div>    
      </div>
      <div className='column-container centered'>
        <div className='line'></div>
        <p><MdCopyright size={14}/><a href='https://linkedin.com/in/alejandro-toledo-dev' >AlejandroToledo</a> | All rights reserved</p>
        <a href="#home"><img src= { fsocietyLogo } alt ='logo'></img></a>
      </div>       
    </footer>
  )
}

export default Footer;
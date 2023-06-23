import React from 'react';
import './Menu.css';
import {Sling as Hamburger} from 'hamburger-react';
import { ThemeContext } from '../../context/ThemeContext';

const Menu = ({ showNavbar, isSmallScreen, setShowNavbar }) => {

  const handleClick = () => {
    setShowNavbar(!showNavbar);
    console.log("clicking");
  };
  
  return (
    <ThemeContext.Consumer>
      {theme => (
    <div id={`component-${theme}`}>
      {isSmallScreen && (
        <div style={{ position: 'fixed', top: '0', right: '15px', zIndex: '9999', opacity: '0.7'  }} 
        onClick={handleClick}>

           <Hamburger toggled={showNavbar} toggle={setShowNavbar} size = {23} /> 

        </div>
      )}
    </div>
         )}
         </ThemeContext.Consumer>
  );
}

export default Menu;

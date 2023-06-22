import React from 'react';
import './Menu.css';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
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
        <div style={{ position: 'fixed', top: '0', right: '15px', margin: '0.3rem', padding: '0.5rem', zIndex: '9999', opacity: '0.8'  }} 
        onClick={handleClick}>
          {!showNavbar ? <MenuIcon style={{ height: '35px', width: '35px' }} /> :
           <MenuOpenIcon style={{ height: '35px', width: '35px'}}/> }
        </div>
      )}
    </div>
         )}
         </ThemeContext.Consumer>
  );
}

export default Menu;

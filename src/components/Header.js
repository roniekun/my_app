import Navbar from './Navbar';
import React, { useState } from 'react';

import './Header.css';

function Header({showNavbar,isSmallScreen,isDesktop}) {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const handleLogoLoad = () => {
    setLogoLoaded(true);
  }

  return (
      <div className='header__container'>
    <a href="/" className="logo">
      <img
        src="/path/to/logo.png"
        alt="roniekun."
        className={logoLoaded ? '' : 'hide-icon'}
        onLoad={handleLogoLoad}
      />
    </a>
      
        <Navbar showNavbar={showNavbar} 
        isDesktop={isDesktop}
        isSmallScreen={isSmallScreen}
        />
      </div>

    
  )
}

export default Header
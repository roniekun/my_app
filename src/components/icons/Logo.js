import React from 'react';
import './Logo.css';
import { ThemeContext } from '../../context/ThemeContext';

function Logo({ showNavbar }) {
  return (
 
      <ThemeContext.Consumer>
        {(themeContext) => (
          <div>
            <h1 id={`component-${themeContext.theme}`} className='logo'>ronie<span>kun.io</span></h1>
            {/* <a href="/" className="logo">
              <img
                src="/path/to/logo.png"
                alt="roniekun."
              />
            </a> */}
          </div>
        )}
      </ThemeContext.Consumer>
    
  );
}

export default Logo;

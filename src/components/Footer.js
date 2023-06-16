import React, { useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import SocialLinks from './socialLinks/SocialLinks';
import './Footer.css';

function Footer({ showNavbar}) {
  const [showFooter, setShowFooter] = useState(window.innerWidth > 768);

  useEffect(() => {
    if (window.innerWidth <= 768 && showNavbar ){ 
      setShowFooter(false)
      }
      else{
        setShowFooter(true)
      }
  }, [showNavbar,showFooter]);

  return (
    <ThemeContext.Consumer>
  {({ theme }) => (
    <div id={`component-${theme}`} className={`footer__container ${!showFooter ? 'hidden' :''}`}>
 {showFooter && (
    <>
      <SocialLinks />   
    </>
  )}
</div>

)}
</ThemeContext.Consumer>
  );
}

export default Footer;



import React, { useState, useEffect } from 'react';
import SocialLinks from './SocialLinks/SocialLinks';
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
    <div className={`footer__container ${!showFooter ? 'hidden' :''}`}>
 {showFooter && (
    <>
      <SocialLinks />
      <span className="text"><p>copyright 2023.</p> <p> rights reserved </p></span>
    </>
  )}
</div>
  );
}

export default Footer;



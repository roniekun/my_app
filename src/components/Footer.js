import React, { useState, useEffect } from 'react';
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
    <div className={`footer__container ${!showFooter ? 'hidden' :''}`}>
 {showFooter && (
    <>
      <SocialLinks />
      <ul>
        <li className='text'>
        <p>copyright 2023.</p> 

        </li>
        <li className='text'>
        <p>all rights reserved </p>

        </li>
      </ul>
    
    </>
  )}
</div>
  );
}

export default Footer;



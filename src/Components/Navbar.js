import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import SocialLinks from './SocialLinks/SocialLinks';

const Navbar = ({showNavbar,setShowNavbar}) => {


  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const location = useLocation();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [isDesktop, setIsDesktop] = useState();


  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
      setShowNavbar(window.innerWidth > 768);
      setIsSmallScreen(window.innerWidth <= 768 && isDesktop);
      
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setShowNavbar,isDesktop]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (window.innerWidth > 768) {
        setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos === 0 || isDesktop);
        setPrevScrollPos(currentScrollPos);
      }
    };

    if (window.innerWidth > 768) { 
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (window.innerWidth > 768) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [prevScrollPos, setShowNavbar, isDesktop]); // Add prevScrollPos and setShowNavbar as dependencies

  return (
    <>
      <nav className={showNavbar ? 'navbar__container' : 'navbar__container__hidden'}>
        <div className={showNavbar ? 'link__wrapper' : 'link__wrapper__hidden'}>
          <Link to="/" className={`navbar__link ${location.pathname === '/' ? 'active' : ''}`}>
            home
          </Link>
          <Link to="/about" className={`navbar__link ${location.pathname === '/about' ? 'active' : ''}`}>
            about
          </Link>
          <Link to="/portfolio" className={`navbar__link ${location.pathname === '/portfolio' ? 'active' : ''}`}>
            portfolio
          </Link>
          <Link to="/contact" className={`navbar__link ${location.pathname === '/contact' ? 'active' : ''}`}>
            contact
          </Link>
      
        </div>
        {showNavbar && isSmallScreen && !isDesktop && (
    <>
      <SocialLinks />
      <span className="text">copyright 2023. right reserved</span>
    </>
  )}
      </nav>

    </>
  );
};

export default Navbar;

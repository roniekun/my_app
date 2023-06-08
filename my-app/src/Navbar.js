import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(window.innerWidth > 768);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowNavbar(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    if (window.innerWidth > 768) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (window.innerWidth > 768) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [prevScrollPos]);

  return (
    <nav className={showNavbar ? 'navbar__container' : 'navbar__hidden'}>
      <ul className="navbar__ul">
        <div className={showNavbar ? 'link__wrapper' : 'link__wrapper__hidden'}>
          <li className="navbar__list">
            <Link to="/" className="navbar__link">
              HOME
            </Link>
          </li>
          <li className="navbar__list">
            <Link to="/about" className="navbar__link">
              ABOUT
            </Link>
          </li>
          <li className="navbar__list">
            <Link to="/portfolio" className="navbar__link">
              PORTFOLIO
            </Link>
          </li>
          <li className="navbar__list">
            <Link to="/contact" className="navbar__link">
              CONTACT
            </Link>
          </li>
        </div>
      </ul>
      <button className="toggle__btn" onClick={toggleNavbar}>
        {showNavbar ? 'X' : '<<'}
      </button>
    </nav>
  );
};

export default Navbar;

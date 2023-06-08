import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const toggleSidebar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
            <Link to="/About" className="navbar__link">
              ABOUT
            </Link>
          </li>
          <li className="navbar__list">
            <Link to="/Portfolio" className="navbar__link">
              PORTFOLIO
            </Link>
          </li>
          <li className="navbar__list">
            <Link to="/Contact" className="navbar__link">
              CONTACT
            </Link>
          </li>
        </div>
      </ul>
      <button className="toggle__btn" onClick={toggleSidebar}>
        {showNavbar ? 'X' : '<<'}
      </button>
    </nav>
  );
};

export default Navbar;

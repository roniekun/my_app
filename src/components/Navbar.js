import { Link, useLocation } from 'react-router-dom';
import SocialLinks from './socialLinks/SocialLinks';
// import ToggleDarkMode from './ToggleDarkMode';
import './Navbar.css';


const Navbar = ({showNavbar,isDesktop,isSmallScreen}) => {
  const location = useLocation();


  return (
    <>
  
      <nav className={showNavbar ? 'navbar__container' : 'navbar__container__hidden'}>
      {/* <ToggleDarkMode/> */}
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

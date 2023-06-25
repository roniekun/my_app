import Navbar from './Navbar';
import { ThemeContext } from '../context/ThemeContext';
import './Header.css';
import Logo from './icons/Logo';

function Header({ showNavbar, isSmallScreen, isDesktop, setShowNavbar }) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <>
          <div className='header__container'>
          <div id={`component-${theme}`} >
             {isSmallScreen && !showNavbar && 
            // <Logo fontColor={isSmallScreen ? "white" : "black"} />
            <Logo fontColor={"white"} />

            }
            <Navbar
              showNavbar={showNavbar}
              isDesktop={isDesktop}
              isSmallScreen={isSmallScreen}
              setShowNavbar={setShowNavbar}
            />
            </div>
          </div>
        </>
      )}
    </ThemeContext.Consumer>
  );
}

export default Header;

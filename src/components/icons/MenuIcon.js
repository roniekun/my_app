import {React} from 'react';
import './MenuIcon.css';


const MenuIcon = ({ showNavbar, isSmallScreen, setShowNavbar }) => {

  const handleClick = () => {
    setShowNavbar(!showNavbar);
    console.log("clicking");
  };
  
  return (
    
    <div> {/* Wrap the JSX code in a parent div */}
      {isSmallScreen && (
        <div
          className="burger-menu-icon"
          onClick={handleClick}>
          <span
            className= {`burger-line ${showNavbar ? 'burger-line' : 'close'}`}
          />
          <span
            className= {`burger-linee ${showNavbar ? 'burger-linee' : 'close'}`}
          />
          <span
            className= {`burger-lineee ${showNavbar ? 'burger-lineee' : 'close'}`}
             />
        </div>
      )}

    </div>
  );
};

export default MenuIcon;

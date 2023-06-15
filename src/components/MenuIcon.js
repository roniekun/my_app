import React from 'react';
// import { motion } from 'framer-motion';
import './MenuIcon.css';

const MenuIcon = ({ showNavbar, isSmallScreen, setShowNavbar }) => {

  const handleClick = () => {
    setShowNavbar(!showNavbar);
    console.log("clickung");
  };

  // const variants = {
  //   open: {
  //     rotate: 45,
  //     y: 6,
  //     transition: {
  //       duration: 0.3,
  //       ease: 'easeInOut',
  //     },
  //   },
  //   closed: {
  //     rotate: 0,
  //     y: 0,
  //     opacity: 1,
  //     transition: {
  //       duration: 0.3,
  //       ease: 'easeInOut',
  //     },
  //   },
  // };

  return (
    <div> {/* Wrap the JSX code in a parent div */}
      {isSmallScreen && (
        <div
          className="burger-menu-icon"
          onClick={handleClick}
          // initial={false}
          // animate={showNavbar ? 'open' : 'closed'}
          // exit="closed"
          
        
        >
          <span
            className= {`burger-line ${showNavbar ? 'burger-line' : 'close'}`}
            // variants={variants}
            // initial="closed"
          />
          <span
            className= {`burger-linee ${showNavbar ? 'burger-linee' : 'close'}`}
            // variants={variants}
            // initial="closed"
          />
          <span
            className= {`burger-lineee ${showNavbar ? 'burger-lineee' : 'close'}`}
            // variants={variants}
            // initial="closed"
          />
        </div>
      )}
    </div>
  );
};

export default MenuIcon;

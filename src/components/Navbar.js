import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { ThemeContext } from '../context/ThemeContext';
import React, { useContext } from 'react';
import ToggleTheme from './buttons/ToggleTheme';
import SocialLinks from './socialLinks/SocialLinks';



const Navbar = ({ showNavbar, isDesktop, isSmallScreen }) => {
const location = useLocation();
const { theme } = useContext(ThemeContext);

  const containerVariants = {
    hidden: {
      y: -20,
      opacity: 0,
      transition: {
        type: 'keyframes',
        values: [-20, 0],
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'keyframes',
        values: [0, -20],
        duration: 0.3,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    hidden: {
      y: -20,
      opacity: 0,
      transition: { duration: 0.3, ease: 'linear' },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'linear' },
    },
    hover: {
      scale: 1.1,
    },
    tap: {
      scale: 0.9,
    },
  };

  const links = [
    { to: '/', text: 'home' },
    { to: '/about', text: 'about' },
    { to: '/portfolio', text: 'portfolio' },
    { to: '/contact', text: 'contact' },
  ];

   return (
    <ThemeContext.Consumer>
      {(themeContext) => (
        <AnimatePresence mode="wait">
       
          {showNavbar && (
            <motion.nav
              className="navbar__container"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={containerVariants}
              id={`component-${theme}`}
            >
              {links.map((link, index) => (
                <AnimatePresence key={link.to}>
                  <motion.div
                    className={`link__wrapper ${showNavbar ? 'link__wrapper' : ''}`}
                    key={link.to}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={linkVariants}
                    transition={{ delay: isSmallScreen ? index * 0.1 : 0 }}
                    whileHover={isSmallScreen ? 'hover' : {}}
                    whileTap={'tap'}
                  >
                    <Link
                     
                      id={`component-${theme}`}
                      className={`${showNavbar ? 'navbar__link' : ''} ${
                        location.pathname === link.to ? 'active' : ''
                      }`}
                      to={link.to}
                    >
                      {link.text}
                    </Link>

                  
                   
                  </motion.div>
                </AnimatePresence>
              ))}
                            
                  <ToggleTheme isSmallScreen={isSmallScreen}/>
                 { isSmallScreen && <SocialLinks showNavbar={showNavbar}/>}
             </motion.nav>
             

          )}
        </AnimatePresence>
      )}
    </ThemeContext.Consumer>
  );
};

export default Navbar
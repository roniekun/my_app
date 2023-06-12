import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AutoscrollBotton from './components/AutoscrollButton';
import './App.css'

const App = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [showNavbar, setShowNavbar] = useState(window.innerWidth > 768);
  


  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsDesktop(screenWidth> 768);
      setShowNavbar(screenWidth> 768);
      setIsSmallScreen(screenWidth <= 768);
      
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setShowNavbar,isDesktop]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (isDesktop) {
        setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos === 0);
        setPrevScrollPos(currentScrollPos);
      }
    };

    if (isDesktop) { 
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (isDesktop) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [prevScrollPos, setShowNavbar, isDesktop]); // Add prevScrollPos and setShowNavbar as dependencies

 
  
  const handleToggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    

    <div className='app__container'>
          <button className="toggle__btn" onClick={handleToggleNavbar}>
        {showNavbar ? 'X' : '<<'}
      </button>
      
      <Header showNavbar={showNavbar} 
              isDesktop={isDesktop}
              isSmallScreen={isSmallScreen}
              />
   
      <AutoscrollBotton 
            isSmallScreen={isSmallScreen}
            isDesktop={isDesktop}
            showNavbar={showNavbar}
      />
      <Footer showNavbar={showNavbar}
       handleToggleNavbar={handleToggleNavbar}
       setShowNavbar={setShowNavbar} 
       />
    </div> 

  );
};

export default App;

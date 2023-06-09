import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AutoscrollButton from './components/buttons/AutoscrollButton';
import Home from './components/main/Home';
import Contact from './components/main/Contact';
import About from './components/main/About';
import Portfolio from './components/main/Portfolio';
import Logo from './components/icons/Logo';
import Menu from './components/icons/Menu';
import './App.css';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import NotFound from './components/main/NotFound';

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [showNavbar, setShowNavbar] = useState(window.innerWidth > 768);

  const handleResize = useCallback(() => {
    const screenWidth = window.innerWidth;
    setIsDesktop(screenWidth > 768);
    setShowNavbar(screenWidth > 768);
    setIsSmallScreen(screenWidth <= 768);
  }, []);

  const handleScroll = useCallback(() => {
    const currentScroll = window.scrollY;
    setShowNavbar(scrollPosition > currentScroll || currentScroll === 0);
    // setShowNavbar(true); shows Navigation bar
    setScrollPosition(currentScroll);
  }, [scrollPosition]);

  useEffect(() => {
    const handleResizeEvent = () => {
      handleResize(isDesktop);
    };

    const handleScrollEvent = () => {
      handleScroll(scrollPosition);
    };

    window.addEventListener('resize', handleResizeEvent);
    if (isDesktop) {
      window.addEventListener('scroll', handleScrollEvent);
    }

    return () => {
      window.removeEventListener('resize', handleResizeEvent);
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [handleResize, handleScroll, isDesktop, scrollPosition]);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ThemeContext.Consumer>
          {({ theme }) => {
            return (
              <div className='app__container' id={`component-${theme}`}>
                <Header
                  showNavbar={showNavbar}
                  isDesktop={isDesktop}
                  isSmallScreen={isSmallScreen}
                  setShowNavbar={setShowNavbar}
                />
               {showNavbar &&<Logo fontColor={isSmallScreen ? "white" : "black"} />} 
                <Menu
                  showNavbar={showNavbar}
                  isSmallScreen={isSmallScreen}
                  setShowNavbar={setShowNavbar}
                />
                <Routes>
                  <Route path='/' element={<Home scrollPosition={scrollPosition} />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/portfolio' element={<Portfolio />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route component={NotFound} />
                </Routes>
                <AutoscrollButton
                  isSmallScreen={isSmallScreen}
                  isDesktop={isDesktop}
                  showNavbar={showNavbar}
                />
                <Footer showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
              </div>
            );
          }}
        </ThemeContext.Consumer>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;


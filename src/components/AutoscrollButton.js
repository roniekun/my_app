import React, { useState, useEffect } from 'react';
import './AutoscrollButton.css';


function AutoscrollButton({ isSmallScreen, showNavbar }) {
  const [isVisible, setIsVisible] = useState(false);

  //this handle the click event when button is clicked
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  //applies the condition 
  const handleScroll = (setIsVisible, isSmallScreen, showNavbar) => {
    const scrollThreshold = 200;
    setIsVisible(window.pageYOffset > scrollThreshold && !(isSmallScreen && showNavbar));
  };

  //this part will handle scroll event
  useEffect(() => {
    const handleScrollEvent = () => handleScroll(setIsVisible, isSmallScreen, showNavbar);

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [isSmallScreen, showNavbar]);

  useEffect(() => {
    handleScroll(setIsVisible, isSmallScreen, showNavbar);
  }, [showNavbar, isSmallScreen]);

  return (
    <div>
      <button
        className={isVisible ? 'scroll__btn' : 'hidden'}
        onClick={handleScrollToTop}
      >
        ^
      </button>
    </div>
  );
}

export default AutoscrollButton;

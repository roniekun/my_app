import React, { useState} from 'react';
import Header from './Components/Header';
import './App.css'
import Footer from './Components/Footer';

const App = () => {
  const [showNavbar, setShowNavbar] = useState(window.innerWidth > 768);
  
  const handleToggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    

    <div className='app__container'>
          <button className="toggle__btn" onClick={handleToggleNavbar}>
        {showNavbar ? 'X' : '<<'}
      </button>
      <Header showNavbar={showNavbar} setShowNavbar={setShowNavbar} handdleToggleNavbar={handleToggleNavbar} />
      <Footer showNavbar={showNavbar} handleToggleNavbar={handleToggleNavbar} setShowNavbar={setShowNavbar} handdleToggleNavbar={handleToggleNavbar}  />
    </div> 

  );
};

export default App;

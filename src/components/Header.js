import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './main/Home';
import Contact from './main/Contact';
import About from './main/About';
import Portfolio from './main/Portfolio';
import './Header.css';

function Header({showNavbar,isSmallScreen,isDesktop}) {

  return (
    <BrowserRouter>
      <div className='header__container'>
      <a href="/" className="logo" >
        <img src="/path/to/logo.png" alt="Logo" />
      </a>
      
        <Navbar showNavbar={showNavbar} 
        isDesktop={isDesktop}
        isSmallScreen={isSmallScreen}
        />
      </div>
      <Routes>
    
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter> 
    
  )
}

export default Header
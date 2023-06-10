import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Navbar/Home';
import Contact from './Navbar/Contact';
import About from './Navbar/About';
import Portfolio from './Navbar/Portfolio';
import './Header.css';


function Header({showNavbar,setShowNavbar}) {



  return (

    
    <BrowserRouter>
      <div className='header__container'>
     

      <a href="/" className="logo" >
        <img src="/path/to/logo.png" alt="Logo" />
      </a>
     

      
    
        <Navbar showNavbar={showNavbar} setShowNavbar={setShowNavbar}/>
        
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